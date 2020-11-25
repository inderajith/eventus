const express = require('express');
const userRouter = express.Router();
const passport = require('passport');
const passportConfig = require('../passport');
const JWT = require('jsonwebtoken');
const User = require('../models/User');
const Event = require('../models/event');


const signToken = userID => {
    return JWT.sign({
        iss: "inder",
        sub: userID
    }, "Inder", {expiresIn:"1h"});
}


userRouter.post('/register', (req, res) => {
    const {username, password} = req.body;
    User.findOne({username}, (err,user)=>{
        if(err)
            res.status(500).json({message: {msgBody: "Error has ocurred", msgError:true}})
        if(user)
            res.status(400).json({message: {msgBody: "USername is already taken", msgError:true}})
        else{
            const newUser = new User({username, password});
            newUser.save(err=>{
                if(err)
                    res.status(500).json({message: {msgBody: "Error has ocurred", msgError:true}})
                else
                    res.status(201).json({message: {msgBody: "Account has been sucessfully created", msgError:false}})

            });
        }
    });
});




userRouter.post('/login', passport.authenticate('local', {session:false}), (req, res)=>{
    if(req.isAuthenticated()){
        const {_id, username} = req.user;
        const token = signToken(_id);
        res.cookie('access_token', token, {httpOnly:true, sameSite:true});
        res.status(200).json({isAuthenticated:true, user:{username}});

    }
});

userRouter.get('/logout', passport.authenticate('jwt', {session:false}), (req, res)=>{
    res.clearCookie('access_token');
    res.json({user:{username:""}, success:true});
});

userRouter.post('/wishlist', passport.authenticate('jwt', {session:false}), (req, res)=>{
    const event = new Event(req.body);
    event.save(err=>{
        if(err)
            res.status(500).json({message: {msgBody: "Error has ocurred", msgError:true}})
        else{
            req.user.events.push(event);
            req.user.save(err=>{
                if(err)
                    res.status(500).json({message: {msgBody: "Error has ocurred", msgError:true}});
                else
                    res.status(200).json({message: {msgBody: "successfully Added the event to wishlist", msgError:false}});
            })
        }

    })
});

userRouter.delete('/wishlist/:id', passport.authenticate('jwt', {session:false}), (req,res) => {
    const id = req.params.id;
    Event.findByIdAndDelete({_id : id}, (err) => {
        if(err)
        {
            res.status(500).json({message: {msgBody: "Error has ocurred", msgError:true}});
        }
        else{
            res.status(200).json({message: {msgBody: "successfully removed the event from wishlist", msgError:false}});
        }
    });
})

userRouter.get('/wishlist', passport.authenticate('jwt', {session:false}), (req, res)=>{
    User.findById({_id : req.user._id}).populate('events').exec((err,document)=>{
        if(err)
            // res.status(500).json({message: {msgBody: "Error has ocurred", msgError:true}});
            console.log(err);
        else{
            res.status(200).json({events: document.events, authenticated :true });
        }
    })
});

userRouter.get('/authenticated', passport.authenticate('jwt', {session:false}), (req, res)=>{
    const {username} = req.user;
    res.status(200).json({isAuthenticated:true, user: {username}});
});


module.exports = userRouter;


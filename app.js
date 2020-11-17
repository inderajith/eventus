const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const cors = require('cors')

const User = require('./models/User');

app.use(cookieParser());
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/mernDB', {useNewUrlParser : true, useUnifiedTopology: true});

// const userInput = {
//     username: 'inder',
//     password: 'inder123'
// };

// const user = new User(userInput);
// user.save((err, document) => {
//     if(err)
//         console.log(err);
//     console.log(document);
// });
const userRouter = require('./routes/User');
app.use('/user', userRouter);

app.listen(3001, () => {
    console.log('express server started');
})

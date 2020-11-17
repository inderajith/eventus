import React, {useState, useRef, useEffect} from 'react';
import AuthService from '../Services/AuthService';
import Message from '../components/Message';

const Register = props => {
    const [user,SetUser] = useState({username: "", password: "", confirmPassword: ""});
    const [message,setMessage] = useState(null);
    let timerID = useRef(null);

    useEffect(() => {
        return() => {
            clearTimeout(timerID);
        }
    }, []);

    const onChange = e => {
        SetUser({...user, [e.target.name] : e.target.value });
    }

    const resetForm = ()=>{
        SetUser({username:"", password:"", confirmPassword: ""})
    }

    const onSubmit = e => {
        e.preventDefault();
        AuthService.register(user).then(data => {
            const {message} = data;
            setMessage(message);
            resetForm();
            if(!message.msgError){
                timerID = setTimeout(() => {
                    props.history.push('/login');
                }, 2000)
            }

        })
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <h3>Register</h3>
                <div className="fm">
                <label htmlFor="username">Username:</label>
                <input type="text" value={user.username} name="username" onChange={onChange} className="input-field" placeholder="Enter a username" autoComplete="off"/>
                <br />
                <label htmlFor="password">Password:</label>
                <input type="password" value={user.password} name="password" onChange={onChange} className="input-field" placeholder="Enter a password" />
                <br />
                <label htmlFor="confirmPassword">Confirm Password:</label>
                <input type="password" value={user.confirmPassword} onChange={onChange} name="confirmPassword" className="input-field" placeholder="Confirm password" />
                <button className="btn" style={{'backgroundColor':'#3399ff'}} type="submit">Register</button>
                </div>
            </form>
            {message ? <Message message={message} /> : null}
        </div>
    );
}

export default Register;




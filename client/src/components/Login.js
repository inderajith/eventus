import React, {useState, useContext} from 'react';
import AuthService from '../Services/AuthService';
import Message from '../components/Message';
import {AuthContext} from '../Context/AuthContext';


const Login = props => {

    const [user,SetUser] = useState({username: "", password: ""});
    const [message,setMessage] = useState(null);
    const authContext = useContext(AuthContext);

    const onChange = e => {
        SetUser({...user, [e.target.name] : e.target.value });
    }

    const onSubmit = e => {
        e.preventDefault();
        AuthService.login(user).then(data => {
            const {isAuthenticated, user, message} = data;
            if(isAuthenticated){
                authContext.setUser(user);
                authContext.setIsAuthenticated(isAuthenticated);
                props.history.push('/events');
            }
        })
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <h3>Sign In</h3>
                <div className="fm">
                <label htmlFor="username">Username:</label>
                <input type="text" name="username" onChange={onChange} className="input-field" placeholder="Enter a username" />
                <br />
                <label htmlFor="password">Password:</label>
                <input type="password" name="password" onChange={onChange} className="input-field" placeholder="Enter a password" />
                <button className="waves-effect waves-light btn" type="submit" style={{'backgroundColor':'#3399ff'}}>Log in</button>
                </div>
            </form>
            {message ? <Message message={message} /> : null}
        </div>
    );
}

export default Login;

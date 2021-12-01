import React, {useState} from "react";
import Button from "./Button";
import auth from '../api/auth.js';
import myToken from "../api/token";
console.log("lol:" + myToken);
const Login = () => {

    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');

    const onSubmit = async (e) => {
        console.log("works");
        e.preventDefault();
        const res = await auth.post('/login', {
            'username': username,
            'password': password
        });
        const token = res.data.token;
        console.log(token);
        myToken.token = token;
        console.log('success');
    };

    return (
        <>
            <form className="ui form">
            <div className="field">
                <label>Username</label>
                <input type="text" name="username" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div className="field">
                <label>Password</label>
                <input type="password" name="Password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <Button name="Login" onClick={(e) => onSubmit(e)} />
            </form>
        </>
    );
};

export default Login;
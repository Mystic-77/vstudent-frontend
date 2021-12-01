import React, {useState} from "react";
import auth from '../api/auth';
import Button from "./Button";
const Signup = () => {
    const [ username, setUsername ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ email, setEmail ] = useState("");
    

    const onSubmit = async (e) => {
        e.preventDefault();
        const res = await auth.post('/student/', {
            "username": username,
            "password": password,
            "email": email,
            "role": "member"
        });
        console.log(res);
    };

    return (
        <>
            <form className="ui form">
                <div className="field">
                    <label>Username</label>
                    <input type="text" name="username" placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="field">
                    <label>Password</label>
                    <input type="password" name="password" placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="field">
                    <label>Email</label>
                    <input type="email" name="email" placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <Button name="Register" onClick={(e) => onSubmit(e)} />
            </form>   
        </>
    );
}

export default Signup;
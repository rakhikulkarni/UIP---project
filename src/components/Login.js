import React, { useState } from 'react';
import '../styles/login.css';
import axios from 'axios';

const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleLogin = (e) =>{
        e.preventDefault()
        const body = {

            username, password
        }
        
        axios.post("http://localhost:5001/user/login",body).then(res=>{
            console.log('res: ', res.data);
            // navigate("/login");
            window.localStorage.setItem("user", JSON.stringify(res.data._doc))
            window.location.href="/";
        })
    }
    return (
        <div className="login-form-container">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <label htmlFor="login-username">Username</label>
                <input id="login-username" type="text" name="username" required onChange={(e)=>{setUsername(e.target.value)}}/>

                <label htmlFor="login-password">Password</label>
                <input id="login-password" type="password" name="password" required onChange={(e)=>{setPassword(e.target.value)}} />

                <a href="/forgot-password" className="forgot-password">Forget Password?</a>

                <button type="submit" className="login-button">Login</button>
                <p>Not a Member? <a href="/register" className="signup-link">Signup</a></p>
            </form>
        </div>
    );
};

export default Login;

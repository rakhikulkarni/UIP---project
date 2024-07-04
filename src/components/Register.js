import React, { useState } from 'react';
import '../styles/register.css';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

const Register = () => {
    // const navigate = Navigate()
const [username,setUsername] = useState("");
const [password,setPassword] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post("http://localhost:5001/user/register",{
            username, password
        }).then(res=>{
            // navigate("/login");
            window.location.href="/login";
        })
    }
    return (
        <div className="register-form-container">
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="register-username">Username</label>
                <input id="register-username" type="text" name="username" required onChange={(e)=>setUsername(e.target.value)} />

                <label htmlFor="register-email">Email</label>
                <input id="register-email" type="email" name="email" required />

                <label htmlFor="register-password">Password</label>
                <input id="register-password" type="password" name="password" required onChange={(e)=>setPassword(e.target.value)}/>

                <button type="submit" className="register-button">Signup</button>
                <p>Already a Member? <a href="/login" className="login-link">Login</a></p>
            </form>
        </div>
    );
};

export default Register;

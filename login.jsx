import React, { useState } from "react";

export const Login = (props) => {
    const [Username, setUsername] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(Username);
    }

    return (
        <section className="sec1">
        <div className="auth-form-container">
            <h1><span>Welcome to </span>  Retail Advanced</h1>
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>

               
                <label htmlFor="username">User Name</label>
                <input value={Username} onChange={(e) => setUsername(e.target.value)}type="text" placeholder="UserName" id="username" name="username" />
                <label htmlFor="password">password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button type="submit">Log In</button>
            </form>
        </div>
        </section>
    )
}
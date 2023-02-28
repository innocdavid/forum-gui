import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {

    // state
    const [user, setUser] = useState({
        email: "",
        password: ""
    });

    // handleChange
    const handleChange = (e) => {
        setUser(prev => ({
            ...prev, [e.target.name]: e.target.value
        }))

    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(user);
    }

    return (
        <main 
            style={{
                //backgroundColor: "#ccc",
                display: "flex", 
                flexDirection: "column", 
                justifyContent: "center",
                alignItems: "center",
                //width: "300px"
            }}
        >
            <h1>Log into your account</h1>
            <form onSubmit={ handleSubmit }>
                <div style={{ display: "flex", flexDirection: "column"}}>
                    <label htmlFor="email">Email Address</label>
                    <input 
                        type="text"
                        name="email"
                        id="email"
                        required
                        value={ user.email }
                        onChange={ handleChange }
                        />
                </div>
                <div style={{ display: "flex", flexDirection: "column"}}>
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password"
                        name="password"
                        id="password"
                        required
                        value={ user.password }
                        onChange={ handleChange }
                    />
                </div>
                <div>
                    <input
                        type="submit"
                        value="LOGIN" 
                    />
                </div>
                <div>
                    <p>
                        Don't have an account? <Link to="/register">Create one</Link>
                    </p>
                </div>
            </form>
        </main>
    );
}

export default Login;
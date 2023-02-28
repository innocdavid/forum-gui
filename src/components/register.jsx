import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {

    // state
    const [user, setUser] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

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
            <h1>Create an account</h1>
            <form onSubmit={ handleSubmit }>
                <div style={{ display: "flex", flexDirection: "column"}}>
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        name="username"
                        id="username" 
                        required
                        value={ user.username }
                        onChange={ handleChange }
                    />
                </div>

                <div style={{ display: "flex", flexDirection: "column"}}>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
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

                <div style={{ display: "flex", flexDirection: "column"}}>
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input
                        type="password"
                        name="confirmPassword"
                        id="confirmPassword" 
                        required
                        value={ user.confirmPassword }
                        onChange={ handleChange }
                    />
                </div>

                <div>
                    <input
                        type="submit"
                        value="REGISTER"
                    />
                </div>
                <div>
                    <p>
                        Already have an account? <Link to="/login">Login</Link>
                    </p>
                </div>
            </form>
        </main>
    );
}

export default Register;
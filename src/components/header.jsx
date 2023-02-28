import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const signOut = () => {
        alert("User signed out!");
    }
    return (
        <nav 
            style={{ 
                padding: "5px",
                backgroundColor: "#ccc",
                justifyContent: "space-between",
                display: "flex", 
            }}
        >
            <Link to="/">
             <h2>talkForum</h2>
            </Link>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "20px"}}>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
            </div>
            
        </nav>
    );
}

export default Header;
import React from "react";

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
            <h2>talkForum</h2>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center"}}>
                <button onClick={ signOut }>Sign out</button>
            </div>
            
        </nav>
    );
}

export default Header;
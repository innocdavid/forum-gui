import React, { useState } from "react";

const Replies = () => {
    
    const [reply, setReply] = useState("");

    const handleChange= (e) => {
        setReply(prev => ({
            ...prev, [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ reply });
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
            <h3>Comment </h3>
            <form onSubmit={ handleSubmit }>
                    <div style={{ display: "flex", flexDirection: "column"}}>
                        <label htmlFor="reply">Comment to this topic</label>
                        <textarea 
                            rows={5}
                            type="text"
                            name="reply"
                            id="reply"
                            required
                            value={ reply }
                            onChange={ handleChange }
                        />
                    </div>
                    <div>
                        <input
                            type="submit"
                            value="SUBMIT COMMENT" 
                        />
                    </div>
            </form>
        </main>
    );
}

export default Replies;
import React,{ useState } from "react";

const Home = () => {

    const [topic, setTopic] = useState({
        title: "",
        description: ""
    });

    const handleChange = (e) => {
        setTopic(prev => ({
            ...prev, [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log()
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
            <h2>Create a new topic</h2>
                <form onSubmit={ handleSubmit }>
                    <div style={{ display: "flex", flexDirection: "column"}}>
                        <label htmlFor="title">Title</label>
                        <input 
                            type="text"
                            name="title"
                            id="title"
                            required
                            value={ topic.title }
                            onChange={ handleChange }
                        />
                    </div>
                    <div style={{ display: "flex", flexDirection: "column"}}>
                        <label htmlFor="description">Description</label>
                        <textarea 
                            type="text"
                            name="description"
                            id="description"
                            required
                            value={ topic.description }
                            onChange={ handleChange }
                        />
                    </div>
                    <div>
                        <input
                            type="submit"
                            value="CREATE NEW TOPIC" 
                        />
                </div>
            </form>
        </main>
    );
}

export default Home;
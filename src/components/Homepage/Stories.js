import React from "react";
import "./Stories.css";

const Stories = () => {
    const stories = ["User1", "User2", "User3", "User4", "User5"];
    return (
        <div className="stories">
            {stories.map((user, index) => (
                <div key={index} className="story">
                    <img src={`https://i.pravatar.cc/50?img=${index}`} alt={user} />
                    <p>{user}</p>
                </div>
            ))}
        </div>
    );
};

export default Stories;

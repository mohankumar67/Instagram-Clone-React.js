import React, { useState } from "react";
import "./Feed.css";
import post1 from "./post1.jpg";
import post2 from "./post2.jpg";
import post3 from "./post3.jpg";

const Feed = () => {
    const [posts, setPosts] = useState([
        { id: 1, username: "User1", image: post1 },
        { id: 2, username: "User2", image: post2 },
        { id: 3, username: "User3", image: post3 }
    ]);

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const imageURL = URL.createObjectURL(file); // Creates a temporary URL for the image
            const newPost = {
                id: posts.length + 1,
                username: "NewUser", // You can replace this with the logged-in user's name
                image: imageURL
            };
            setPosts([newPost, ...posts]); // Add new post at the top
        }
    };

    return (
        <div className="feed">
            <div className="upload-section">
                <input type="file" accept="image/*" onChange={handleImageUpload} />
            </div>
            {posts.map((post) => (
                <div key={post.id} className="post">
                    <h4>{post.username}</h4>
                    <img src={post.image} alt="Post" />
                    <div className="actions">
                        <span>❤️ Like</span>
                        <span>💬 Comment</span>
                        <span>📤 Share</span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Feed;

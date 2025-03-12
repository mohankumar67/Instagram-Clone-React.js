import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="profile">
                <img src="https://i.pravatar.cc/50" alt="User" />
                <p>@username</p>
            </div>
            <h4>Suggestions</h4>
            <div className="suggestions">
                <p>@friend1</p>
                <p>@friend2</p>
                <p>@friend3</p>
            </div>
        </div>
    );
};

export default Sidebar;

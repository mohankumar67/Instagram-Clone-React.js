import React from "react"
import "./Navbar.css"

function Navbar (){
    return(
        <nav className="navbar">
            <div className="logo">Instagram</div>
            <input type="text" className="search" placeholder="Search"/>
            <div className="icons">
                <span>🏠</span>
                <span>✉️</span>
                <span>❤️</span>
                <span>👤</span> 
            </div>
        </nav>
    );
}

export default Navbar;
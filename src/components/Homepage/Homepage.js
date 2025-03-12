import React, { Component } from 'react';
import Navbar from './Navbar'
import Stories from './Stories'
import Feed from './Feed'
import Sidebar from './Sidebar'
import './HomePage.css'


class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
           <div className='homepage'>
            <Navbar/>
            <div className='main-content'>
                <div className='feed-section'>
                    <Stories/>
                    <Feed/>
                </div>
                <Sidebar/>
            </div>
           </div>
        )   
    }
}

export default HomePage;
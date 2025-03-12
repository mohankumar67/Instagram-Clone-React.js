import React, { Component } from 'react';
import './LoginPage.css';
import inst_image from './first.png';
import insta_logo from './instagram-logo2-freelogovectors.net_.png';
import google from './googleplay.png';
import microsoft from './micro.png';

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className='loginpage_container'>
                <div className='loginpage_center'>
                    <div className='loginpage_image'>
                        <img src={inst_image} alt='insta' />
                    </div>
                    <div className='loginpage_form'>
                        <img className='loginpage_logo' src={insta_logo} alt='logo' />
                        <input type='text' placeholder='Phone Number, username, or email' />
                        <input type='password' placeholder='Password' />
                        <button className='login_btn'>Log in</button>
                        <div className='loginpage_or'>
                            <hr className='divider' />
                            <span>OR</span>
                            <hr className='divider' />
                        </div>
                        <button className='facebook_login'>Log in with Facebook</button>
                        <a href='#' className='forget_password'>Forgot password?</a>

                        <div className='signup_section'>
                        Don't have an account? <a href='#'>Sign up</a>
                    </div>

                    <div className='app_links'>
                        <img src={google} alt='Google Play' />
                        <img src={microsoft} alt='Microsoft Store' />
                    </div>
                    </div>

                   
                </div>
            </div>
        );
    }
}

export default LoginPage;

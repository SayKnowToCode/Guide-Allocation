// Login.js
import React from 'react';
import './log.css'; // Import the CSS file for styling

const Login = () => {
    return (
        <div class="form-container">
            <p className='h2'>Login</p>
            <form className="form">
                <div className="input-group">
                    <label for="username">Teamname</label>
                    <input type="text" name="username" id="username" placeholder="" />
                </div>
                <div className="input-group">
                    <label for="username">Team-ID</label>
                    <input type="text" name="username" id="username" placeholder="" />
                </div>
                <div className="input-group">
                    <label for="password">Password</label>
                    <input type="password" name="password" id="password" placeholder="" />
                    <div className="forgot">
                        <a rel="noopener noreferrer" href="#">Forgot Password ?</a>
                    </div>
                </div>
                <div>
                    <button className="sign">Sign in</button>
                </div>
            </form>
            <p className="signup">Don't have an account?
                <a rel="noopener noreferrer" href="#" className="">Sign up</a>
            </p>
        </div>
    );
};

export default Login;

// Login.js
import React from 'react';
import './LoginPage.css'; // Import the CSS file for styling
import { Link, useNavigate } from 'react-router-dom';

const LoginPage = () => {

    const navigate = useNavigate()

    const handleSubmit = () => {
        navigate('/studentDashboard')
    }

    return (
        <div class="form-container">
            <p className='h2'>Login</p>
            <form className="form" onSubmit={handleSubmit}>
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
                        <p><Link to='/register'>Forgot Password ?</Link></p>
                    </div>
                </div>
                <div>
                    <button type="submit" className="sign">Sign in</button>
                </div>
            </form>
            <p className="signup">Don't have an account?
                <Link to='/register'>Sign up</Link>
            </p>
        </div>
    );
};

export default LoginPage;

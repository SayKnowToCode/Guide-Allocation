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
        <div className="form-container">
            <p className='h2'>Login</p>
            <form className="form" onSubmit={handleSubmit}>
                <div className="inputContainer">
                    <input required="required" id="inputField" placeholder="Teamname" type="text" />
                    <label className="usernameLabel" for="inputField">Teamname</label>
                </div>
                <div className="inputContainer">
                    <input required="required" id="inputField" placeholder="TeamID" type="text" />
                    <label className="usernameLabel" for="inputField">TeamID</label>
                </div>
                <div className="inputContainer">
                    <input required="required" id="inputField" placeholder="Password" type="password" />
                    <label className="usernameLabel" for="inputField">Password</label>
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

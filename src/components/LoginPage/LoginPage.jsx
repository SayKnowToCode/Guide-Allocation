import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [teamName, setTeamName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission logic here
    try {
        const response = await axios.post('http://localhost:3500/login', {
            teamName,
            password
        })

        localStorage.setItem('teamData',JSON.stringify(response.data))
        navigate('/studentDashboard')
    }
    catch (err)
    {
        console.log(err.response.data);
    }
  };

  return (
    <div className="form-container text-white">
      <p className='h2'>Login</p>
      <form className="form" onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="teamName">Teamname</label>
          <input
            type="text"
            name="teamName"
            id="teamName"
            placeholder=""
            value={teamName}
            onChange={(e) => setTeamName(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder=""
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="forgot">
            <p>
              <Link to='/register'>Forgot Password?</Link>
            </p>
          </div>
        </div>
        <div>
          <button type="submit" className="sign">Sign in</button>
        </div>
      </form>
      <p className="signup">
        Don't have an account?
        <Link to='/register'>Sign up</Link>
      </p>
    </div>
  );
};

export default LoginForm;

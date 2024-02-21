import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios';
import './RegisterPage.css'
import './Extra.css'

const RegisterPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    teamName: '',
    leaderName: '',
    leaderUID: '',
    leaderEmail: '',
    member1Name: '',
    member1UID: '',
    member1Email: '',
    member2Name: '',
    member2UID: '',
    member2Email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password === formData.confirmPassword) {
      try {
        const response = await axios.post('http://localhost:3500/register', {
          teamName: formData.teamName,
          password: formData.password,
          leaderName: formData.leaderName,
          leaderUID: formData.leaderUID,
          leaderEmail: formData.leaderEmail,
          member1Name: formData.member1Name,
          member1UID: formData.member1UID,
          member1Email: formData.member1Email,
          member2Name: formData.member2Name,
          member2UID: formData.member2UID,
          member2Email: formData.member2Email
        })
        console.log(response.data);
        navigate('/');
      }
      catch (err) {
        console.log(err.response.data);
      }

    }
    else
      console.log("Password and Confirm Password do not match");

  };

  return (
    <div className='text-white Register-Container'>
      <div className='home-title'>
        <span><p>Welcome To The Site</p></span>
      </div>
      <h2 className='Heading'>Team Registration</h2>
      <form className='Form' onSubmit={handleSubmit}>
        {/* Team Name */}
        <div className='inputGroup'>
          <input
            type="text"
            id="teamName"
            name="teamName"
            value={formData.teamName}
            onChange={handleChange}
            required
            autoComplete='off'
          />
          <label htmlFor="teamName">Team Name:</label>
        </div>
        {/* Leader Information */}
        <div className='teamName'>
          <div className='inputGroup'>
            <input
              type="text"
              id="leaderName"
              name="leaderName"
              value={formData.leaderName}
              onChange={handleChange}
              required
              autoComplete='off'
            />
            <label htmlFor="leaderName">Leader Name:</label>
          </div>
          <div className='inputGroup'>
            <input
              type="text"
              id="leaderUID"
              name="leaderUID"
              value={formData.leaderUID}
              onChange={handleChange}
              required
              autoComplete='off'
            />
            <label htmlFor="leaderUID">Leader UID:</label>
          </div>
          <div className='inputGroup'>
            <input
              type="email"
              id="leaderEmail"
              name="leaderEmail"
              value={formData.leaderEmail}
              onChange={handleChange}
              required
              autoComplete='off'
            />
            <label htmlFor="leaderEmail">Leader SPIT Email:</label>
          </div>
        </div>
        <div className='teamName'>
          {/* Member 1 Information */}
          <div className='inputGroup'>
            <input
              type="text"
              id="member1Name"
              name="member1Name"
              value={formData.member1Name}
              onChange={handleChange}
              required
              autoComplete='off'
            />
            <label htmlFor="member1Name">Member 1 Name:</label>
          </div>
          <div className='inputGroup'>
            <input
              type="text"
              id="member1UID"
              name="member1UID"
              value={formData.member1UID}
              onChange={handleChange}
              required
              autoComplete='off'
            />
            <label htmlFor="member1UID">Member 1 UID:</label>
          </div>
          <div className='inputGroup'>
            <input
              type="email"
              id="member1Email"
              name="member1Email"
              value={formData.member1Email}
              onChange={handleChange}
              required
              autoComplete='off'
            />
            <label htmlFor="member1Email">Member 1 SPIT Email:</label>
          </div>
        </div>
        <div className='teamName'>
          {/* Member 2 Information */}
          <div className='inputGroup'>
            <input
              type="text"
              id="member2Name"
              name="member2Name"
              value={formData.member2Name}
              onChange={handleChange}
              required
              autoComplete='off'
            />
            <label htmlFor="member2Name">Member 2 Name:</label>
            </div>
            <div className='inputGroup'>
              <input
                type="text"
                id="member2UID"
                name="member2UID"
                value={formData.member2UID} 
                onChange={handleChange}
                required
                autoComplete='off'
              />
              <label htmlFor="member2UID">Member 2 UID:</label>
            </div>
            <div className='inputGroup'>
              <input
                type="email"
                id="member2Email"
                name="member2Email"
                value={formData.member2Email}
                onChange={handleChange}
                required
                autoComplete='off'
              />
              <label htmlFor="member2Email">Member 2 SPIT Email:</label>
            </div>
          </div>
          {/* Password */}
          <div className='teamName'>
            <div className='inputGroup'>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                autoComplete='off'
              />
              <label htmlFor="password">Set Password:</label>
            </div>
          </div>
          <div className='teamName'>
            {/* Confirm Password */}
            <div className='inputGroup'>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                autoComplete='off'
              />
              <label htmlFor="confirmPassword">Confirm Password:</label>
            </div>
          </div>
          <div className='teamName ml-48'>
            {/* Submit Button */}
            <button className="reg" type="submit">Register</button>
          </div>
      </form>
    </div>
  );
};

export default RegisterPage;

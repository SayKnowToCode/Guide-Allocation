import React, { useState} from 'react';
import { useNavigate } from 'react-router';

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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (validation, API call, etc.) here
    console.log('Form submitted:', formData);
    navigate('/');
  };

  return (
    <div  className='text-white'>
      <h2>Team Registration</h2>
      <form onSubmit={handleSubmit}>
        {/* Team Name */}
        <label htmlFor="teamName">Team Name:</label>
        <input
          type="text"
          id="teamName"
          name="teamName"
          value={formData.teamName}
          onChange={handleChange}
          required
        />

        {/* Leader Information */}
        <label htmlFor="leaderName">Leader Name:</label>
        <input
          type="text"
          id="leaderName"
          name="leaderName"
          value={formData.leaderName}
          onChange={handleChange}
          required
        />
        <label htmlFor="leaderUID">Leader UID:</label>
        <input
          type="text"
          id="leaderUID"
          name="leaderUID"
          value={formData.leaderUID}
          onChange={handleChange}
          required
        />
        <label htmlFor="leaderEmail">Leader SPIT Email:</label>
        <input
          type="email"
          id="leaderEmail"
          name="leaderEmail"
          value={formData.leaderEmail}
          onChange={handleChange}
          required
        />

        {/* Member 1 Information */}
        {/* Similar fields for Member 1 as for Leader */}

        {/* Member 2 Information */}
        {/* Similar fields for Member 2 as for Leader */}

        {/* Password */}
        <label htmlFor="password">Set Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        {/* Confirm Password */}
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />

        {/* Submit Button */}
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterPage;

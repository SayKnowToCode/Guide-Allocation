import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

const LoginForm = () => {
    const [teamName, setTeamName] = useState('');
    const [facultyName, setFacultyName] = useState('');
    const [password, setPassword] = useState('');
    const [role,setRole] = useState('student');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Handle form submission logic here
        try {
            const response = await axios.post('http://localhost:3500/login', {
                teamName,
                facultyName,
                password,
                role
            })

            if(role === 'student')
            {    localStorage.setItem('teamData', JSON.stringify(response.data))
                navigate('/studentDashboard')
            }
            else
            {
                localStorage.setItem('facultyData', JSON.stringify(response.data))
                navigate('/facultyDashboard')
            }
        }
        catch (err) {
            console.log(err.response.data);
        }
    };

    const handleClickOnStudent = () => {
      console.log('here student');
      if(role !== 'student')
      {
        setRole('student')
      }
    }

    const handleClickOnFaculty = () => {
      console.log('here faculty');
      if(role !== 'faculty')
      {
        setRole('faculty')
      }
    }

    return (
        <div className="form-container text-white">
            <p className='h2'>Login</p>

            <div className='option flex gap-16'>
                <button className='button' onClick={handleClickOnStudent}>
                    <span>Student</span>
                </button>
                <button className='button' onClick={handleClickOnFaculty}>
                    <span>Faculty</span>
                </button>
            </div>

            <form className="form" onSubmit={handleSubmit}>
                <div className="inputContainer">

                    { role === 'student' && ( <> <input
                        type="text"
                        name="teamName"
                        id="inputField"
                        placeholder=""
                        value={teamName}
                        onChange={(e) => setTeamName(e.target.value)}

                    />
                    <label className='usernameLabel' htmlFor="inputField">Team Name</label> </> ) }

                    {role === 'faculty' && ( <> <input
                        type="text"
                        name="facultyName"
                        id="inputField"
                        placeholder=""
                        value={facultyName}
                        onChange={(e) => setFacultyName(e.target.value)}

                    />
                    <label className='usernameLabel' htmlFor="inputField">Faculty Name</label> </>)}

                </div>
                <div className="inputContainer">
                    <input
                        type="password"
                        name="password"
                        id="inputField"
                        placeholder=""
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <label className="usernameLabel" htmlFor="inputField">Password</label>
                    <div className="forgot">
                        <p>
                            <Link to='/register'>Forgot Password?</Link>
                        </p>
                    </div>
                </div>
                <div>
                    <button type="submit" className="sign">Log in</button>
                </div>
            </form>
            <p className="signup">
                Don't have an account?
                <Link className="Register" to='/register'>Register</Link>
            </p>
        </div>
    );
};

export default LoginForm;

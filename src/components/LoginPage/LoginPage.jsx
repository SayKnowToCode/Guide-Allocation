import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import './LoginPage.css';

const LoginForm = ({ setFaculties }) => {
    const [teamName, setTeamName] = useState('');
    const [email, setEmail] = useState('');
    const [facultyName, setFacultyName] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('student');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Handle form submission logic here
        try {
            const response = await axios.get('http://localhost:3500/login', {
                params: {
                    teamName: teamName,
                    email: email,
                    facultyName: facultyName,
                    password: password,
                    role: role
                }
            })

            if (role === 'student') {
                localStorage.setItem('teamData', JSON.stringify(response.data))
                navigate('/studentDashboard')
            }
            else {
                setFaculties(response.data);
                localStorage.setItem('facultyData', JSON.stringify(response.data))
                navigate('/facultyDashboard')
            }
        }
        catch (err) {
            console.log(err.response.data);
        }
    };

    const handleClickOnStudent = () => {
        if (role !== 'student') {
            setRole('student')
        }
    }

    const handleClickOnFaculty = () => {
        if (role !== 'faculty') {
            setRole('faculty')
        }
    }

    return (
        <div className="form-container ">
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

                    {role === 'student' &&
                        (<>
                            <input
                                type="text"
                                name="teamName"
                                className='inputField'
                                placeholder=""
                                required
                                value={teamName}
                                onChange={(e) => setTeamName(e.target.value)}
                            />
                            <label className='usernameLabel'>Team Name</label> <br />

                            <input
                                type="text"
                                name="email"
                                className='inputField'
                                placeholder=""
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <label className='usernameLabel'>Email</label>
                        </>)
                    }

                    {role === 'faculty' && (<> <input
                        type="text"
                        name="facultyName"
                        className='inputField'
                        placeholder=""
                        required
                        value={facultyName}
                        onChange={(e) => setFacultyName(e.target.value)}

                    />
                        <label className='usernameLabel' >Faculty Name</label> </>)}

                </div>
                <div className="inputContainer">
                    <input
                        type="password"
                        name="password"
                        className='inputField'
                        placeholder=""
                        required
                        autoComplete='off'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <label className="usernameLabel">Password</label>
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

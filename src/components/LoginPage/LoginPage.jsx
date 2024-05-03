import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css'
import { MdDoubleArrow } from "react-icons/md";

const LoginForm = () => {
    const [teamName, setTeamName] = useState('');
    const [email, setEmail] = useState('');
    const [facultyName, setFacultyName] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('student');
    const navigate = useNavigate();
    const [formVisible, setFormVisible] = useState(true);
    const [formSuccess, setFormSuccess] = useState(false);

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
                localStorage.setItem('facultyData', JSON.stringify(response.data))
                navigate('/facultyDashboard')
            }
        }
        catch (err) {
            console.log(err.response.data);
        }
        setFormVisible(false);
        setTimeout(() => {
            setFormSuccess(true);
        }, 500);
    };

    const handleClickOnStudent = () => {
        setRole('student')
    }

    const handleClickOnFaculty = () => {
        setRole('faculty')
    }

    return (
        <div className={`wrapper ${formSuccess ? 'form-success' : ''} text-white`}>
            <div className="container">
                {/* <p className='h2'>Login</p> */}
                <h1>Welcome</h1>

                {formVisible && (
                    <form className="form" onSubmit={handleSubmit}>
                        <div className='option'>
                            <button className='button-login' onClick={handleClickOnStudent}>
                                <span className='flex '>Student<MdDoubleArrow className='mt-1' /></span>
                            </button>
                            <button className='button-login' onClick={handleClickOnFaculty}>
                                <span className='flex justify-center '>Faculty <MdDoubleArrow className='mt-1' /></span>
                            </button>
                        </div>
                        <div className="inputContainer">

                            {role === 'student' &&
                                (<>
                                    <input
                                        type="text"
                                        name="teamName"
                                        className='inputField'
                                        placeholder="teamname"
                                        required
                                        value={teamName}
                                        onChange={(e) => setTeamName(e.target.value)}
                                    />
                                    {/* <label className='usernameLabel'>Team Name</label> <br /> */}

                                    <input
                                        type="text"
                                        name="email"
                                        className='inputField'
                                        placeholder="email"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    {/* <label className='usernameLabel'>Email</label> */}
                                </>)
                            }

                            {role === 'faculty' && (<> <input
                                type="text"
                                name="facultyName"
                                className='inputField'
                                placeholder="facuty name"
                                required
                                value={facultyName}
                                onChange={(e) => setFacultyName(e.target.value)}

                            />
                                {/* <label className='usernameLabel' >Faculty Name</label> */}
                            </>)}

                        </div>
                        <div className="inputContainer">
                            <input
                                type="password"
                                name="password"
                                className='inputField'
                                placeholder="password"
                                required
                                autoComplete='off'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            {/* <label className="usernameLabel">Password</label> */}
                            <div className="forgot">
                                <p>
                                    <Link to='/register'>Forgot Password?</Link>
                                </p>
                            </div>
                        </div>
                        <div>
                            <button type="submit" className="sign">Log in</button>
                        </div>
                        <p className="signup">
                            Don't have an account?
                            <Link className="Register" to='/register'>Register</Link>
                        </p>
                    </form>
                )}
                <ul className="bg-bubbles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </div>
    );
};

export default LoginForm;

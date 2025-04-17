import {useState} from 'react';
import axios from 'axios';

import { useNavigate } from 'react-router-dom';

const Login=()=>{
    const[credentials, setCredentials]=useState({email:'',password:''});
    const navigate=useNavigate();

    const handleChange=(e)=>{
        setCredentials({...credentials,[e.target.name]:e.target.value});

    };
    console.log('Login form....');

const handleLogin=async (e)=>{
    e.preventDefault();
    try {
        const response=await axios.post('http://localhost:5000/api/auth/login',credentials);
        console.log('response', response);
if (response.status===200) {
    localStorage.setItem('token',response.data.token);// Store JWT token
    alert('Logged in successfully!');
    navigate('/');
} else {
    alert('Failed to login ' +response.data.error);
    navigate('/login');
}

    } catch (error) {
        alert('Login failed:',+error.message);
    };
    console.log('Login form.... ', credentials);}
    return (

        <form onSubmit={handleLogin}>
            <h1>Login</h1>

<input
type='email' name='email' placeholder='"Your Email' value={credentials.email} onChange={handleChange} required
/>
<input
type='password' name='password' placeholder='Your password' value={credentials.password} onChange={handleChange} required
/>
<button type='submit'>Login</button>
        </form>
    )
}

export default Login;

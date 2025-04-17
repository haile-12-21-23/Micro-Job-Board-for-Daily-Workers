import {useState} from 'react';

import axios from 'axios';

import { useNavigate } from 'react-router-dom';

const SignUp=()=>{
    const [user, setUser]=useState({name:'',phoneNumber:'',email:'', password:''});
    const navigate=useNavigate();

   const handleChange=(e)=>{
setUser({...user,[e.target.name]:e.target.value});
    };
    const handleSubmit=async (e)=>{
e.preventDefault();
try {
    await axios.post('http://localhost:5000/api/auth/signup', user);
    alert('User signup successfully!');
    navigate('/login');
} catch (error) {
alert('Error during sign-up: ' ,+ error.message);
}
    };
    return <form onSubmit={handleSubmit}>
<input
type='text' name='name' placeholder='Your name' value={user.name} onChange={handleChange} required
/>
<input
type='text' name='phoneNumber' placeholder='Your phone number' value={user.phoneNumber} onChange={handleChange} required
/>
<input
type='email' name='email' placeholder='Your email' value={user.email} onChange={handleChange} required
/>
<input
type='password' name='password' placeholder='Your Password' value={user.password} onChange={handleChange} required
/>
<button type='submit'>Sign Up</button>
    </form>
}

export default SignUp;
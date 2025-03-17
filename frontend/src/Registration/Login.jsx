import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3000/login', { email, password })
      .then(result => {
        if (result.data === 'admin') {
          navigate('/Admin');
        }else if(result.data === 'success') {
            navigate('/home')
        }
        else {
          alert(result.data);
          window.location.reload()
        }
      })
      .catch(err => console.log(err));
  };

  return (
    <>
      <div className='d-flex justify-content-center align-items-center vh-100 bg-dark'>
        <div className='w-50 bg-light rounded p-3'>
          <h1>Login</h1>
          <form onSubmit={handleSubmit}>
            <div className='mb-3'>
              <label>Email</label>
              <input type='email' placeholder='Enter your email' className='form-control' onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className='mb-3'>
              <label>Password</label>
              <input type='password' placeholder='Enter your password' className='form-control' onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button className='btn bg-success float-end text-light'>Login</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;

import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Register = () => {
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [age,setAge]=useState(0)
    const [password,setPassword]=useState('')
    const navigate =useNavigate()

    const handleSubmit =(e)=>{
        e.preventDefault()
        axios.post('http://localhost:3000/create',{name,email,age,password})
        .then(res =>{
            console.log(res)
            navigate('/login')
    })
        .catch(err =>console.log(err))
    }
  return (
    <>
    <div  className='d-flex justify-content-center align-items-center vh-100 bg-dark'>
        <div className='w-50 bg-light rounded p-3'>
            <h1>Register</h1>
            <form action="" onSubmit={handleSubmit}>
                <div className='mb-3'>
                    <label htmlFor="">Name</label>
                    <input type="text" placeholder='enter your name' className='form-control' onChange={(e)=> setName(e.target.value)}/>
                </div>
                <div className='mb-3'>
                    <label htmlFor="">Email</label>
                    <input type="email" placeholder='enter your email' className='form-control' onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div className='mb-3'>
                    <label htmlFor="">Age</label>
                    <input type="number" placeholder='enter your Age' className='form-control' onChange={(e)=>setAge(e.target.value)}/>
                </div>
                <div className='mb-3'>
                    <label htmlFor="">Password</label>
                    <input type="password" placeholder='enter your Password' className='form-control' onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                <button className='btn bg-success float-end text-light'>save</button>
            </form>
        </div>
    </div>
    </>
  )
}

export default Register
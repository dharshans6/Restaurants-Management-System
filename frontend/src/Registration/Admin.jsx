import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
const Admin = () => {
    const [users,setUsers] =useState([])
    useEffect(()=>{
        axios.get('http://localhost:3000/getUser')
        .then(result =>{
            console.log(result.data);
            
            setUsers(result.data)
        }).catch(err => console.log(err))
        
    },[])
  return (
    <>
    <div className='d-flex justify-content-center align-items-center vh-100 bg-dark'>
        <div className='w-50 bg-light rounded p-3'>
            <h1>User Data</h1>
            <Link to='/home'><button className='btn bg-success float-end text-light'>home</button></Link>
     <table className='table table-striped'>
        <thead>
            <tr>
                <th>Sno</th>
                <th>Name</th>
                <th>Email</th>
                <th>Age</th>
            </tr>
        </thead>
        <tbody>
            {users.map((user,i)=>
                <tr key={i}>
                    <td>{i+1}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.age}</td>
                </tr>
            )}
        </tbody>
     </table>
     </div>
     </div>
    </>
  )
}

export default Admin
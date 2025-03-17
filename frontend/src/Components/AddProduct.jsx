import React,{useState} from 'react'
import axios from 'axios'

const AddProduct = () => {
    const [name,setName]=useState('')
    const [image,setimage]=useState('')
    const [price,setprice]=useState('')
    const [description,setdescription]=useState('')



    const handleSubmit =(e)=>{
        e.preventDefault()
        axios.post('http://localhost:3000/productPost',{name,image,price,description})
        .then(res =>{
            console.log(res)
            window.location.reload()
        
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
                    <label htmlFor="">image</label>
                    <input type="text" placeholder='enter your image' className='form-control' onChange={(e)=>setimage(e.target.value)}/>
                </div>
                <div className='mb-3'>
                    <label htmlFor="">price</label>
                    <input type="number" placeholder='enter your price' className='form-control' onChange={(e)=>setprice(e.target.value)}/>
                </div>
                <div className='mb-3'>
                    <label htmlFor="">Description</label>
                    <input type="text" placeholder='enter your price' className='form-control' onChange={(e)=>setdescription(e.target.value)}/>
                </div>
                <button className='btn bg-success float-end text-light'>save</button>
            </form>
        </div>
    </div>
    </>
  )
}

export default AddProduct
import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import AddProduct from './Components/AddProduct'
import Cart from './Components/Cart'
import Navbar from './Components/Navbar'
import Homepage from './Components/Homepage'
import Order from './Components/Order'
import Register from './Registration/Register'
import Login from './Registration/Login'
import Admin from './Registration/Admin'
const Routing = () => {
  return (
    <>
    <BrowserRouter>
     <Routes>
        <Route path='/' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/home' element={<Homepage/>}/>
        <Route path='/add' element={<AddProduct/>}/>
        <Route path='/home/cart' element={<Cart/>}/>
        <Route path='/orders' element={<Order/>}/>
        <Route path='/admin' element={<Admin/>}/>
     </Routes>
    </BrowserRouter>
    </>
  )
}

export default Routing
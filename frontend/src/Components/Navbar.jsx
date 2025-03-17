import React, { useContext } from 'react'
import { CartContext } from '../Context API/ContextProvider'
import { Link } from 'react-router-dom'
const Navbar = () => {
    const {cart} =useContext(CartContext)
    console.log(cart);
    
  return (
    <>
  
    <nav className="navbar navbar-expand-lg ">
        <h1><a className="navbar-brand" href="#" style={{fontSize:'30px'}}>ROMS foods</a></h1>
        <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
            <li className="nav-item ">
                <a className="nav-link" href="#">Login</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Cart {cart.length} </a>
            </li>
            </ul>
        </div>
    </nav>

    </>
  )
}

export default Navbar
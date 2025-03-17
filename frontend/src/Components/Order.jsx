import React, { useContext } from 'react';
import { CartContext } from '../Context API/ContextProvider';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
const Cart = () => {
  const { cart } = useContext(CartContext);

  

  const getRandomTime = () => {
    const randomMinutes = Math.floor(Math.random() * (120 - 10 + 1)) + 10; 
    
    if (randomMinutes >= 60) {
      return `${Math.floor(randomMinutes / 60)} hour${randomMinutes >= 120 ? 's' : ''} ago`;
    }
    return `${randomMinutes} minute ago`;
  };
  

  return (
    <>
    <Navbar/>
      <h1>Orders</h1>
      <div className="d-flex align-items-center justify-content-center" style={{ height: '80%' }}>
        <div>
          {cart.length === 0 ? (
            <h1 className="text-center text-muted">Nothing in the bag</h1>
          ) : (
            <>
              {cart.map((product, i) => (
                <div className="card mb-3" style={{ maxWidth: '50%' }} key={i}>
                  <div className="row" style={{ height: '50%' }}>
                    <div className="col">
                      <img
                        src={product.image}
                        className="img-fluid rounded-start"
                        alt={product.name}
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body w-100">
                        <h5 className="card-title">{product.name}</h5>
                        <h2 className="card-text">₹{product.price}</h2>
                        <p className="card-text">{product.description}</p>
                        <p className="card-text">
                          <small className="text-muted">
                            Food will be Delivered in {getRandomTime()}
                          </small>
                        </p>
                   
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
       <Link to='/home'> 
            <div className='d-flex align-items-center justify-content-center m-5 '>
                <button className='btn bg-secondary text-light text-center ' style={{'width':'80%'}}>Back to Shop</button>
            </div>
        </Link>
    </>
  );
};

export default Cart;

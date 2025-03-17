import React, { useState, useEffect, useContext } from 'react';
import { CartContext } from '../Context API/ContextProvider';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
const Cart = () => {
  const { cart } = useContext(CartContext);
  const [total, setTotal] = useState(0);


  useEffect(() => {
    const totalPrice = cart.reduce((acc, product) => acc + product.price, 0);
    setTotal(totalPrice);
  }, [cart]);

  return (
    <>
    <Navbar/>
      <h1>Cart</h1>
      <div className="d-flex align-items-center justify-content-center" style={{'height':'80%'}}>
        <div>
       
          {cart.length === 0 ? (
            <h1 className="text-center text-muted ">Nothing in the bag</h1>
          ) : (
            <>
              {cart.map((product, i) => (
                <div className="card mb-3" style={{ maxWidth: '50%' }} key={i}>
                  <div className="row" style={{ height: '50%' }}>
                    <div className="col">
                      <img
                        src={product.image}
                        className="img-fluid rounded-start"
                        alt="..."
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body w-100">
                        <h5 className="card-title">{product.name}</h5>
                        <h2 className="card-text">₹{product.price}</h2>
                        <p className="card-text">{product.description}</p>
                        <p className="card-text">
                          <small className="text-muted">
                            Last updated 3 mins ago
                          </small>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <div className="bg-light text-center m-5">
                <h1>Total amount</h1>
                <h2>Total: ₹{total.toFixed(2)}</h2>
                <h2>Quantity: {cart.length}</h2>
                <Link to="/orders">
                  <button className="btn bg-success text-light">payment</button>
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;

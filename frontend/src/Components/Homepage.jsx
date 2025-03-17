import React, { useEffect, useState,useContext } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch,useSelector } from "react-redux";
import axios from "axios";
import { getAllProducts } from "../actions/productAction";
import {CartContext} from "../Context API/ContextProvider";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const Homepage = ({product}) => {
  const {dispatch}=useContext(CartContext)
  const [products, setProducts] = useState([]); 
  const [quantities, setQuantities] = useState([]);
  const [show, setShow] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);

 
  
  useEffect(() => {
    axios.get("http://localhost:3000/getProducts")
        .then((result) => {
            setProducts(result.data); 
        })
        .catch((err) => console.log(err)); 
}, []);
 

//   const dispatch=useDispatch()
//   useEffect(()=>{
//     dispatch(getAllProducts())
//   },[])
  
  useEffect(() => {
    if (products.length > 0) {
      setQuantities(products.map(() => 1));
    }
  }, [products]);




  const handleClose = () => setShow(false);
  const handleShow = (product) => {
    setCurrentProduct(product);
    setShow(true);
  };

  const handleQuantityChange = (i, value) => {
    const newQuantities = [...quantities];
    newQuantities[i] = parseInt(value, 10);
    setQuantities(newQuantities);
  };

  return (
    <div>
        <Navbar/>
        <h1>Foods</h1>
      <h2>Total Products: {products.length}</h2>
      <Link to='cart'><button className="btn bg-secondary rounded text-light ">cart</button></Link>
      <Link to='/order'><button className="btn bg-secondary rounded m-3 text-light">order</button></Link>
      <div className="row d-flex justify-content-center">
        {products.map((product, i) => (
          <div className="col-md-3 g-5" key={i}>
            <div className="card" style={{ width: "18rem" }}>
              <img
                src={product.image}
                className="card-img-top"
                alt={product.name}
                onClick={() => handleShow(product)}
                style={{ cursor: "pointer",height:'200px' }}
              />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">
                  ₹{product.price * quantities[i]} /<span>{product.star} ⭐</span>
                </p>
                <p className="card-text">
                   {product.description.length > 30 
                    ? `${product.description.substring(0, 30)}...` 
                    : product.description}
                </p>
                <div className="d-flex justify-content-between">
                  <select
                    value={quantities[i]}
                    onChange={(e) => handleQuantityChange(i, e.target.value)}
                    className="form-select w-50"
                  >
                    {[...Array(10).keys()].map((num) => (
                      <option key={num + 1} value={num + 1}>
                        {num + 1}
                      </option>
                    ))}
                  </select>

                  <Button
                        variant="primary"
                        className="w-50"
                        onClick={() =>
                            dispatch({
                            type: "Add",
                            product: {
                                ...product,
                                price: product.price * quantities[i], 
                                quantity: quantities[i], 
                            },
                            })
                        }
                        >
                        Add to Cart
                    </Button>

                </div>
              </div>
            </div>
          </div>
          
        ))}
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {currentProduct ? currentProduct.name : "Product Details"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {currentProduct && (
            <>
              <img
                src={currentProduct.image}
                alt={currentProduct.name}
                style={{ width: "100%" }}
              />
              <p>{currentProduct.description}</p>
              <p>Price: ₹{currentProduct.price}</p>
              <p>Rating: {currentProduct.star} ⭐</p>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Homepage;

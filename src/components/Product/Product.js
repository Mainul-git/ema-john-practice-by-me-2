import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import "./Product.css";
const Product = (props) => {
  console.log(props);
  const { img, name, seller, stock, price } = props.children;
  return (
    <div className="product">
      <div>
        <img src={img} alt="" />
      </div>
      <div>
        <h1>This is Product</h1>
        <h4 className="product-name">{name}</h4>
        <p>
          <small>by:{seller}</small>
        </p>
        <p>${price}</p>
        <p>
          <small>Only {stock} left in stock -Order soon</small>
        </p>
        <button className="main-button" onClick={()=>props.handleAddProduct(props.children)}> <FontAwesomeIcon icon={faShoppingCart} />add to cart</button>
      </div>
    </div>
  );
};

export default Product;

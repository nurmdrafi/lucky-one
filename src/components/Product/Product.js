import React from "react";
import "./Product.css";
import { BsFillCartPlusFill } from "react-icons/bs";

const Product = (props) => {
  const { name, image, price } = props.product;
  const addToCart = props.addToCart;

  return (
    <div className="card">
      <div className="image-container">
        <img src={image} alt="" />
      </div>
      <h2>{name}</h2>
      <h2>Price: ${price}</h2>
      <button onClick={() => addToCart(props.product)}>
        Add To Cart <BsFillCartPlusFill></BsFillCartPlusFill>
      </button>
    </div>
  );
};

export default Product;

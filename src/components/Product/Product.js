import React from "react";
import "./Product.css";
import { BsFillCartPlusFill } from "react-icons/bs";

const Product = (props) => {
  const { name, image, price } = props.product;

  return (
    <div className="card">
      <div className="image-container">
        <img src={image} alt="" />
      </div>
      <h2>{name}</h2>
      <h2>$ {price}</h2>
      <button>
        Add To Cart <BsFillCartPlusFill></BsFillCartPlusFill>
      </button>
    </div>
  );
};

export default Product;

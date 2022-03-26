import React from "react";
import Item from "../Item/Item";

import "./Cart.css";

const Cart = ({ data, chooseAgain, chooseSingleItem }) => {
  return (
    <div className="cart">
      <h2>Selected Items</h2>
      {data.map((item, index) => (
        <Item key={index} item={item}></Item>
      ))}
      <div className="button-container">
        <button onClick={chooseSingleItem}>Choose 1 item for me</button>
        <button onClick={chooseAgain}>Choose Again</button>
      </div>
    </div>
  );
};

export default Cart;

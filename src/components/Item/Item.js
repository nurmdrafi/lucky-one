import React from 'react';
import './Item.css'

const Item = (props) => {
    const { name, image } = props.item;
    return (
      <div className="item">
        <img src={image} alt="" />
        <p>{name}</p>
      </div>
    );
  };
  
  export default Item;
  
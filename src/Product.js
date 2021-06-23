import React, { useState } from "react";
import "./Product.css";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
function Product({ id, title, image, price, rating }) {
  const [{basket},dispatch] = useStateValue();
  const addToBasket = ()=>{
    dispatch({
      type:'ADD_TO_BASKET',
      item:{
        id,
        title,
        price,
        image,
        rating
      }
    })

  }
  return (
    <div className="product">
      <div className="productInfo">
        <p>{title}</p>
        <p className="product_price">
          <small>Rs</small>
          <strong>{price}</strong>
        </p>
        <div className="product-rating">
          {Array(rating)
            .fill()
            .map((_) => {
              return <p className="star"> &#10026;</p>;
            })}
        </div>
      </div>
      <img src={image} />
      <button onClick={addToBasket}>Add to basket</button>
    </div>
  );
}

export default Product;

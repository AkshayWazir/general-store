import React from "react";
import "./styles.css";

export default function AddToCart(props) {
  const { count = 0, addToCart, removeFromCart } = props;

  function compRender() {
    if (count === 0) {
      return (
        <span className="addtocart-cont-1" onClick={addToCart}>
          Add
        </span>
      );
    } else {
      return (
        <div className="addtocart-cont-2">
          <span onClick={removeFromCart}>-</span>
          <span>{count}</span>
          <span onClick={addToCart}>+</span>
        </div>
      );
    }
  }
  return compRender();
}

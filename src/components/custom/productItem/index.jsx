import React, { useState } from "react";
import AddToCart from "../addToCart";
import "./styles.css";

export default function ProductItem(props) {
  const {
    data = { name: "", img: "", detail: "" },
    increment = () => {},
    decrement = () => {},
  } = props;
  const [items, setItems] = useState(0);

  return (
    <div className="product-item-cont">
      <img src={data.img} alt="product" className="product-item-image" />
      <span style={{ padding: "1vh" }}>
        <p className="product-item-title">{data.name}</p>
        <p className="product-item-detail">{data.detail}</p>
      </span>
      <AddToCart
        count={items}
        addToCart={() => {
          setItems(items + 1);
          increment();
        }}
        removeFromCart={() => {
          setItems(items - 1);
          decrement();
        }}
      />
    </div>
  );
}

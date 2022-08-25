import React, { useState } from "react";
import AddToCart from "../addToCart";
import "./styles.css";
// * this is used to navigate to different routes
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

export default function ProductItem(props) {
  let navigate = useNavigate();
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

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
        <p className="product-item-title" onClick={() => navigate(`/detail/${data.id}`)}>
          {data.name}
        </p>
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

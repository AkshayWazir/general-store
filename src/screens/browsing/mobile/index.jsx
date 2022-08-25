import React from "react";
import "./styles.css";
import { getBrowsingData } from "../../../api/browsingAPI";
import { ProductItem } from "../../../components";

export default function Mobile(props) {
  const data = getBrowsingData();
  return (
    <div className="browsing-content">
      {data.map((item) => (
        <ProductItem data={item} />
      ))}
    </div>
  );
}

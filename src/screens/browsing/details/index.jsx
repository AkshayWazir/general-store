import React, { useState, useEffect } from "react";
import { TopNav } from "../../../components";
import "./styles.css";
import { useParams } from "react-router-dom";
import { getProduct } from "../../../api/browsingAPI";

export default function Details(prosp) {
  const [productData, setProductData] = useState({});
  let params = useParams();

  useEffect(() => {
    setProductData(getProduct(params.id));
  }, []);

  return (
    <div className="details-screen">
      <div className="details-image-sec"></div>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import { getBrowsingData } from "../../api/browsingAPI";
import { ProductItem, TopNav } from "../../components";
import "./styles.css";

export default function Browsing(props) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(getBrowsingData());
  }, []);

  return (
    <div className="browsing-window">
      <TopNav />
      <div className="browsing-content">
        {products.map((item) => (
          <ProductItem data={item} />
        ))}
      </div>
    </div>
  );
}

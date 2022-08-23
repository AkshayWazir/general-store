import React, { useEffect, useState } from "react";
import { getBrowsingData } from "../../api/browsingAPI";
import { ProductItem, TopNav } from "../../components";
import "./styles.css";

export default function Browsing(props) {
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setProducts(getBrowsingData());
  }, []);

  return (
    <div className="browsing-window">
      <TopNav cartToolTip={count} onSearchChange={(val) => setSearch(val)} />
      <div className="browsing-content">
        {search.length === 0
          ? products.map((item) => (
              <ProductItem
                data={item}
                increment={() => setCount(count + 1)}
                decrement={() => setCount(count - 1)}
              />
            ))
          : products
              .filter((item) => item.name.includes(search))
              .map((item) => (
                <ProductItem
                  data={item}
                  increment={() => setCount(count + 1)}
                  decrement={() => setCount(count - 1)}
                />
              ))}
      </div>
    </div>
  );
}

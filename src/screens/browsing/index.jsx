import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { getBrowsingData } from "../../api/browsingAPI";
import { ProductItem, TopNav } from "../../components";
import Clothes from "./clothes";
import Details from "./details";
import Mobile from "./mobile";
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
      <Routes>
        <Route
          path="/"
          element={
            <div className="browsing-content">
              {(search.length === 0
                ? products
                : products.filter((item) => item.name.includes(search))
              ).map((item) => (
                <ProductItem
                  data={item}
                  increment={() => setCount(count + 1)}
                  decrement={() => setCount(count - 1)}
                />
              ))}
            </div>
          }
        />
        <Route path="detail" element={<Details />}>
          <Route path=":id" element={<Details />} />
        </Route>
        <Route path="mobile" element={<Mobile />} />
        <Route path="clothes" element={<Clothes />} />
      </Routes>
    </div>
  );
}

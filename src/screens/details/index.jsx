import React from "react";
import { TopNav } from "../../components";
import "./styles.css";
import { useParams } from "react-router-dom";

export default function Details(prosp) {
  let params = useParams();
  return (
    <div>
      <TopNav />
      <div className="details-screen">Details {params.name || "Nothing Passed"}</div>
    </div>
  );
}

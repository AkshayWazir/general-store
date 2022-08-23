import React from "react";
import "./styles.css";

export default function TopNavBar(props) {
  const { onSearchChange, cartToolTip = 0 } = props;
  return (
    <div className="TopNavBar-container">
      <p className="TopNavBar-title">General-Store</p>
      <input
        type="text"
        className="TopNavBar-search"
        placeholder="Search"
        onChange={(e) => onSearchChange(e.target.value)}
      />
      <span className="TopNavBar-icon-cont">
        <img src="images/cart.svg" className="TopNavTabIcon" alt="" />
        {cartToolTip > 0 && <span className="TopNav-tooltip">{cartToolTip}</span>}
      </span>
      <span className="TopNavBar-icon-cont">
        <img src="images/profile.svg" className="TopNavTabIcon" alt="" />
      </span>
    </div>
  );
}

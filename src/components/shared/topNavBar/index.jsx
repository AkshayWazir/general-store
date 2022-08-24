import React from "react";
import "./styles.css";
import CartImage from "../../../assets/images/cart.svg";
import ProfileImage from "../../../assets/images/profile.svg";

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
        <img src={CartImage} className="TopNavTabIcon" alt="" />
        {cartToolTip > 0 && <span className="TopNav-tooltip">{cartToolTip}</span>}
      </span>
      <span className="TopNavBar-icon-cont">
        <img src={ProfileImage} className="TopNavTabIcon" alt="" />
      </span>
    </div>
  );
}

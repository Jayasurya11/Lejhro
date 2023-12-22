import React from "react";
import { LiaTelegramPlane } from "react-icons/lia";
import { HiBars3CenterLeft } from "react-icons/hi2";
import { Link } from "react-router-dom";
const FinancialNavbar = () => {
  return (
    <div className="navbar ">
      <div className="adjustment">
        <div className="logo ">
          <LiaTelegramPlane /> LEJHRO
        </div>
        <div className="main-nav ">
          <Link to={"/innovations"}>Innovations</Link>
          <Link to={"/business-services"}>Business Services</Link>
          <Link to={"/financial-services"}>Financial Services</Link>
          <Link to={"/bootcamp"}>Bootcamp</Link>
          <Link to={"/"} className="navbutton">
            <HiBars3CenterLeft />
          </Link>
        </div>
      </div>
      <div className="blog-nav">Financial Services</div>
    </div>
  );
};

export default FinancialNavbar;

import React from "react";
import { LiaTelegramPlane } from "react-icons/lia";
import { HiBars3CenterLeft } from "react-icons/hi2";
import { Link } from "react-router-dom";
import innovations_lejhro from "../../images/lejhro-innovation-page1.png";

const InnovationsNavbar = () => {
  return (
    <div className="navbar-innovations ">
      <div className="adjustment-innovations">
        <div className="logo-innovations">
          <LiaTelegramPlane /> LEJHRO
        </div>
        <div className="main-nav-innovations ">
          <Link to={"/innovations"}>Innovations</Link>
          <Link to={"/business-services"}>Business Services</Link>
          <Link to={"/financial-services"}>Financial Services</Link>
          <Link to={"/bootcamp"}>Bootcamp</Link>
          <Link to={"/"} className="navbutton">
            <HiBars3CenterLeft />
          </Link>
        </div>
      </div>
      <div className="innovations-img ">
        <img src={innovations_lejhro} alt="" />
        <div className="text-left ">
          Driving Innovation <br />
          Through Change{" "}
        </div>
      </div>
    </div>
  );
};

export default InnovationsNavbar;

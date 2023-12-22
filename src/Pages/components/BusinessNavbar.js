import React from "react";
import { LiaTelegramPlane } from "react-icons/lia";
import { HiBars3CenterLeft } from "react-icons/hi2";
import { Link } from "react-router-dom";
import services_balloon from "../../images/services-homepage.png";

const BusinessNavbar = () => {
  return (
    <div className="navbar-business ">
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
        <img src={services_balloon} alt="" />
        <div className="text-right">
          Accelerate Your <br />
          Business{" "}
        </div>
      </div>
    </div>
  );
};

export default BusinessNavbar;

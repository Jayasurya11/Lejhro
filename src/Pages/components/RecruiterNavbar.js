import React from "react";
import { LiaTelegramPlane } from "react-icons/lia";
import { HiBars3CenterLeft } from "react-icons/hi2";
import { Link } from "react-router-dom";
import recruiter_bg from "../../images/homepage-backgound.png";

const RecruiterNavbar = () => {
  return (
    <div className="navbar-recruiter">
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
      <div className="recruiter-nav-moto">Build Your Futute Work Force</div>
      <div className="recruiter-img ">
        <div>
          <button>
            <Link to="/contact-us">Contact Us</Link>
          </button>
        </div>
        <img src={recruiter_bg} alt="" />
      </div>
    </div>
  );
};

export default RecruiterNavbar;

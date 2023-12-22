import "./App.css";
import Footer from "./Footer";
import DataAnalysis from "./DataAnalysis";
import Navbar from "./Navbar";
import { useRef } from "react";

import {
  FaFacebookSquare,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { LiaTelegramPlane } from "react-icons/lia";
import { IoIosCloseCircleOutline } from "react-icons/io";
function App() {
  const myRef = useRef();
  const myRef2 = useRef();
  const handleSideNav = () => {
    myRef.current.style.right = 0;
  };
  const handleClose = () => {
    myRef.current.style.right = "-550px";
  };
  return (
    <div ref={myRef2}>
      <Navbar handleSideNav={handleSideNav} />
      <div ref={myRef} className="sidenav">
        <div className="d-flex head-sidenav">
          <div className="logo ">
            <LiaTelegramPlane /> LEJHRO
          </div>
          <button className="cross" onClick={handleClose}>
            <IoIosCloseCircleOutline />
          </button>
        </div>
        <Link to={"/innovations"}>Innovations</Link>
        <Link to={"/bootcamp"}>Bootcamp</Link>
        <Link to={"/business-services"}>Business Services</Link>
        <Link to={"/financial-services"}>Financial Services</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/conatct-us"}>Conatct Us</Link>
        <Link to={"/blogs"}>Blogs</Link>
        <div className="d-flex sidenav-social">
          <Link to={"https://twitter.com/lejhro"} target="_blank">
            <FaTwitter />
          </Link>
          <Link to={"https://www.facebook.com/lejhro"} target="_blank">
            <FaFacebookSquare />
          </Link>
          <Link to={"https://www.linkedin.com/company/lejhro/"} target="_blank">
            <FaLinkedin />
          </Link>
          <Link
            to={"https://www.youtube.com/channel/UCN_okXQlwY7e26UJ8tJtCQQ"}
            target="_blank"
          >
            <FaYoutube />
          </Link>
        </div>
      </div>
      <DataAnalysis />
      <Footer />
    </div>
  );
}

export default App;

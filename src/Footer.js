import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowUp } from "react-icons/io";
import {
  FaFacebookSquare,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
const Footer = () => {
  const handleScrollUp = () => {
    window.scrollTo(0, 0);
  };
  return (
    <>
      <div className="bluebox"></div>
      <div className="container footer">
        <div className="row py-5">
          <div className="col-sm-12 col-md-6 col-lg-3 ">
            <p>Company</p>
            <div className="footer-links">
              <Link to={"/innovations"}>Innovations</Link>
              <Link to={"/business-services"}>Business Services</Link>
              <Link to={"/financial-services"}>Financial Services</Link>
              <Link to={"/recruiter"}>Lejhro Recruiter</Link>
              <Link to={"/about"}>About</Link>
              <Link to={"/blogs"}>Blogs</Link>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3">
            <p>Programs</p>
            <div className="footer-links">
              <Link to={"/bootcamp"}>lejhro Bootcamp</Link>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3">
            <p>Support</p>
            <div className="footer-links">
              <Link to={"/contact-us"}>Contact</Link>
              <Link to={"/terms-of-use"}>Terms of Use</Link>
              <Link to={"/privacy-statement"}>Privacy Statement</Link>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3 ">
            <p>Connect With Us</p>
            <div className="social">
              <Link to={"https://twitter.com/lejhro"} target="_blank">
                <FaTwitter />
              </Link>
              <Link to={"https://www.facebook.com/lejhro"} target="_blank">
                <FaFacebookSquare />
              </Link>
              <Link
                to={"https://www.linkedin.com/company/lejhro/"}
                target="_blank"
              >
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
        </div>
      </div>

      <div className="text-center">© 2023 LEJHRO. All Rights Reserved.</div>
      <div>
        <button className="scrollup" onClick={handleScrollUp}>
          <IoIosArrowUp />
        </button>
      </div>
    </>
  );
};

export default Footer;

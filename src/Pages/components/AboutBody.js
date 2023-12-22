import React from "react";
import logo from "../../images/logo192.png";
import ceo from "../../images/Shakti.png";
import vp from "../../images/Basu.png";
import vision from "../../images/about-vision.jpg";
import mission from "../../images/about-mission.jpg";
import join_us from "../../images/about-join-us.jpg";
const AboutBody = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="row about-page-top">
          <img src={logo} alt="" />
          <p className="bold-font my-2">Our Purpose</p>
          <p className="purpose_p my-3">
            To provide innovative solutions through change
          </p>
        </div>
      </div>
      <div className="container-fluid mt-5 lavander officials">
        <div className="container">
          <div className="row">
            <p>
              Lejhro's experienced management team drives our company, guides it
              to accomplish its vision, and inspires its employees to ensure
              clients achieve their goals.
            </p>
            <div className="col-sm-12 col-lg-6 individual-official">
              <img src={ceo} alt="" />
              <p className="size-increase">Shakti Panigrahi</p>
              <h4>CEO</h4>
            </div>
            <div className="col-sm-12 col-lg-6 individual-official">
              <img src={vp} alt="" />
              <p className="size-increase">Bidintha Basumatary</p>
              <h4>Vice President</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5 py-3">
        <div className="row">
          <div className="offset-lg-2 vision col-sm-12 col-lg-4 lavander">
            <img src={vision} className="img-fluid" alt="" />
            <p className="size-increase">Vision</p>
            <p>
              Lejhro was founded with a rebellious spirit and its objective was
              'to be the change' and make a mark with its technological
              innovations and remarkable products.
            </p>
          </div>
          <div className="col-sm-12 col-lg-4 lavander mission">
            <img src={mission} alt="" className="img-fluid" />
            <p className="size-increase">Mission</p>
            <p>
              Provide quality and cost effective training to inspire, innovate
              and adapt to the evolving technology and accelerate business
              growth.
            </p>
          </div>
        </div>
      </div>
      <div className="join-us lavander mt-5">
        <p className="size-increase">Why Join us?</p>
        <img src={join_us} alt="" />
        <p>
          Lejhro was founded with a rebellious spirit and its objective was to
          be the change and make a mark with its technological innovations and
          remarkable products.
        </p>
        <p>
          To apply mail your cv to{" "}
          <a href="mailto:hr@lejhro.com">hr@lejhro.com</a>
        </p>
      </div>
    </>
  );
};

export default AboutBody;

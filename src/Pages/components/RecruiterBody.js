import React from "react";
import why_learn from "../../images/why-lejhro.png";
import tick from "../../images/text-icon.png";
const RecruiterBody = () => {
  return (
    <>
      <div className="container my-5">
        <div className="row">
          <div className="col-sm-12 col-lg-6 ticks">
            <p className="bold-font">Why Lejhro Learners?</p>
            <p>
              <img src={tick} alt="" />
              Industry Ready Candidates
            </p>
            <p>
              <img src={tick} alt="" />
              Diverse Skill Sets and Capabilities
            </p>
            <p>
              <img src={tick} alt="" />
              Groomed by Experts
            </p>
            <p>
              <img src={tick} alt="" />
              Trusted By Industry Pioneers
            </p>
          </div>
          <div className="col-sm-12 col-lg-6">
            <img src={why_learn} className="img-fluid" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default RecruiterBody;

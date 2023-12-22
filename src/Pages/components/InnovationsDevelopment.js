import React from "react";
import innovations_img1 from "../../images/innovations-research-1440x593.png";
import innovations_img2 from "../../images/innovations-r-and-d-small.png";
import innovations_img3 from "../../images/innovations-product-development-1440x593.png";
import innovations_img4 from "../../images/innovations-product-development-small.png";
const InnovationsDevelopment = () => {
  return (
    <div className="innovations">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h5>Research Development</h5>
            <p>
              We at Lejhro believe Research & Development(R&D) as the best
              investment for the future.
            </p>
            <img src={innovations_img1} className="img-fluid" alt="" />
          </div>
        </div>
      </div>
      <div className="container-fluid gray mt-5">
        <div className="container">
          <div className="row py-5">
            <div className=" col-sm-12 col-lg-6">
              <p>
                R&D, an essential function for many businesses, is responsible
                for achieving breakthroughs in innovation.
              </p>
              <p>
                R&D always goes along with product development and behind every
                innovative product invention are decades of extensive research
                that ignites a spark within the organization.
              </p>
              <p>
                Research is the most endangered investment area because both the
                development of inventiveness and its prosperous understanding
                takes doubt, including the profitability of the creativeness. In
                a resolution, "huge R and D spending does not assure a more
                creative, more fabulous profit or more market share".
              </p>
            </div>
            <div className="col-sm-12 col-lg-6 ">
              <img src={innovations_img2} className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-12">
            <h5>Product Development</h5>
            <p>
              The journey of a new product development starts with an idea that
              should be untried or out of the box, forming the foundation for
              further development.
            </p>
            <img src={innovations_img3} className="img-fluid" alt="" />
          </div>
        </div>
      </div>
      <div className="container-fluid gray mt-5">
        <div className="container">
          <div className="row py-5">
            <div className=" col-sm-12 col-lg-6">
              <h5 className="mb-5">What is Innovation Product Development?</h5>

              <p>
                It's a cross-functional activity that involves the process of
                transforming innovative ideas into reality. The innovation
                product development methodology consists of stages like
                ideation, design, validation, and launch of the final product.
              </p>
              <p>
                Additionally, this process also includes regular reviews of
                customer data, their problem statement, and feedback.
              </p>
            </div>
            <div className="col-sm-12 col-lg-6 ">
              <img src={innovations_img4} className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InnovationsDevelopment;

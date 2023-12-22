import React from "react";
import digital_marketing from "../../images/services-digital-marketing.jpg";
import data_analyst from "../../images/services-data-analyst-img.jpg";
import app_modernization from "../../images/services-application-modernization-img.jpg";
import cyber_security from "../../images/services-cyber-security.jpg";
import qa from "../../images/services-qulaty-assurance.jpg";
const BusinessBody = () => {
  return (
    <div className="business">
      <div className="container">
        <div className="row ">
          <div className="col-sm-12 col-lg-6">
            <img src={digital_marketing} className="img-fluid" alt="" />
          </div>
          <div className="col-sm-12 col-lg-6">
            <h5>Digital Marketing</h5>
            <p>
              In today's cut-throat competitive environment, enterprises in
              order to find their footing, must market themselves digitally and
              develop a strong online presence.
            </p>
            <p>
              We at Lejhro help businesses in strong relationship building with
              their clients by delivering customized and superior results.
            </p>
          </div>
        </div>
      </div>
      <div className="container-fluid gray mt-5">
        <div className="container">
          <div className="row py-5">
            <div className=" col-sm-12 col-lg-6">
              <h5>Data Analyst</h5>
              <p>
                In today's ever changing environment businesses have to ensure a
                flexible and dynamic approach for a brighter future.
              </p>

              <p>
                In order to flourish enterprises must rethink their working
                style and develop the ability to predict, brainstorm, respond
                and adapt to any setbacks or challenges.
              </p>
            </div>
            <div className="col-sm-12 col-lg-6 ">
              <img src={data_analyst} className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-sm-12 col-lg-6">
            <img src={app_modernization} className="img-fluid" alt="" />
          </div>
          <div className="col-sm-12 col-lg-6">
            <h5>Application Modernization</h5>
            <p>
              With the dominance of technology all around the globe and
              applications becoming the new trend, application modernization has
              become more than necessary.
            </p>
            <p>
              Organizations need to revamp applications in innovative ways in
              order to ensure better growth and survival in the future.
            </p>
          </div>
        </div>
      </div>
      <div className="container-fluid gray mt-5">
        <div className="container">
          <div className="row py-5">
            <div className=" col-sm-12 col-lg-6">
              <h5>Application Development and Maintenance</h5>
              <p>
                In this digital age usage of applications and technology by
                organizations has become necessary for ease of operation.
              </p>

              <p>
                With usage, maintenance and further development become even more
                essential for smooth operations. Businesses now more than ever
                need to build proficient and systematic ways to achieve their
                strategic targets.
              </p>
            </div>
            <div className="col-sm-12 col-lg-6">
              <img src={data_analyst} className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-sm-12 col-lg-6">
            <img src={cyber_security} className="img-fluid" alt="" />
          </div>
          <div className="col-sm-12 col-lg-6">
            <h5>Cyber Security</h5>
            <p>
              With the advent of the digital era and businesses being heavily
              reliant on technology, cyber security becomes very crucial for an
              organization.
            </p>
            <p>
              Now, work securely with Lejhro's cyber security services which are
              based on the strategy of securing and ensuring scalability without
              compromising on safety.
            </p>
          </div>
        </div>
      </div>
      <div className="container-fluid gray mt-5">
        <div className="container">
          <div className="row py-5">
            <div className=" col-sm-12 col-lg-6">
              <h5>Quality Assurance</h5>
              <p>
                Now digitally transforming and revamping organizations has
                become quintessential in this era.
              </p>

              <p>
                Re-structure your enterprises with quality assurance services
                from Lejhro which are mainly focused on building strategic
                relations to magnify our clients' value.
              </p>
            </div>
            <div className="col-sm-12 col-lg-6">
              <img src={qa} className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessBody;

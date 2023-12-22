import React from "react";

const BlogsBody = () => {
  return (
    <div className="top-blogs">
      <h3 className="blogs-heading bold-font">Latest Blogs</h3>
      <div className="blogs">
        <div className="blog ">
          <h5>
            Statistical Approaches for Balancing Data Privacy & Innovation
          </h5>
          <p>
            Stay ahead with the advancements that have the potential to
            revolutionize industries.
          </p>
          <a href="#">Read More</a>
        </div>
        <div className=" blog">
          <h5>How Tech Skills Propel Young Professionals Towards Success?</h5>
          <p>
            In this ever-changing career landscape, gaining skill expertise is
            needed to drive the career workforce.
          </p>
          <a href="#">Read More</a>
        </div>
        <div className="blog">
          <h5>
            Achieving Excellence in Data Governance and Quality Management
          </h5>
          <p>
            Unlocking best practices in data governance & quality management.
          </p>
          <a href="">Read More</a>
        </div>
        <div className=" blog ">
          <h5>7 Proven Strategies for Digital Marketing Success</h5>
          <p>Unlock digital marketing success with 7 proven strategies.</p>
          <a href="">Read More</a>
        </div>
        <div className="blog">
          <h5>Social Media: Boost Biz Growth with Engaging Content</h5>
          <p>
            Social media growth: Set goals, know audience, choose platforms,
            engage with content, leverage user content.
          </p>
          <a href="">Read More</a>
        </div>
        <div className=" blog">
          <h5>Data Warehousing Revolution: Future with AI and ML</h5>
          <p>
            Future of data warehousing, Data warehousing trends, AI, machine
            learning, Data warehousing .
          </p>
          <a href="">Read More</a>
        </div>
      </div>
      <div className="loadmore">
        <button>Load More</button>
      </div>
    </div>
  );
};

export default BlogsBody;

import React from "react";
import Footer from "../Footer";
import "../index.css";
import RecruiterNavbar from "./components/RecruiterNavbar";
import RecruiterBody from "./components/RecruiterBody";
const Recruiter = () => {
  return (
    <>
      <RecruiterNavbar />
      <RecruiterBody />
      <Footer />
    </>
  );
};

export default Recruiter;

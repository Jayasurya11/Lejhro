import React from "react";
import Footer from "../Footer";
import InnovationsNavbar from "./components/InnovationsNavbar";
import "./Innovations.css";
import InnovationsDevelopment from "./components/InnovationsDevelopment";

const Innovations = () => {
  return (
    <>
      <InnovationsNavbar />

      <InnovationsDevelopment />
      <Footer />
    </>
  );
};

export default Innovations;

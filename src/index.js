import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Innovations from "./Pages/Innovations";
import BusinessServices from "./Pages/BusinessServices";
import FinancialServices from "./Pages/FinancialServices";
import Bootcamp from "./Pages/Bootcamp";
import About from "./Pages/About";
import Blogs from "./Pages/Blogs";
import Contact from "./Pages/Contact";
import PrivacyStatement from "./Pages/PrivacyStatement";
import Recruiter from "./Pages/Recruiter";
import TermsOfUse from "./Pages/TermsOfUse";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/innovations" element={<Innovations />} />
      <Route path="/business-services" element={<BusinessServices />} />
      <Route path="/financial-services" element={<FinancialServices />} />
      <Route path="/bootcamp" element={<Bootcamp />} />
      <Route path="/about" element={<About />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/contact-us" element={<Contact />} />
      <Route path="/privacy-statement" element={<PrivacyStatement />} />
      <Route path="/recruiter" element={<Recruiter />} />
      <Route path="/terms-of-use" element={<TermsOfUse />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

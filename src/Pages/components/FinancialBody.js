import React from "react";
import about_back from "../../images/aboutBack.c7d299c0e8a62678ba35.png";
import steps from "../../images/steps.png";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { FaCoins } from "react-icons/fa6";
const FinancialBody = () => {
  return (
    <div className="financial">
      <div className="container mt-5">
        <div className="row">
          <div className="col-sm-12 col-lg-5">
            <h5>Invest | Earn | Grow </h5>
            <p>
              Two Incomes, One Future: Make Investments Smarter. Earn 1%
              interest per month.
            </p>
            <p>**T&C Apply</p>
            <p>Talk to Lejhro consultant today.</p>
            <button className="callback">Request a call back</button>
          </div>
          <div className="col-sm-12 col-lg-7">
            <img src={about_back} className="img-fluid" alt="" />
          </div>
        </div>
      </div>
      <div className="container-fluid financial-deposits gray mt-5">
        <div className="container">
          <div className="row pt-5">
            <p className="bold-font">Fixed Deposits</p>
            <p>
              Witness the transformation of your savings into a thriving force
              of financial growth with a powerful choice of Fixed Deposits!
            </p>
            <p>
              By entrusting your funds to FD, you're setting in motion a process
              that nurtures your wealth. It's not about safeguarding your
              hard-earned money; it's about igniting a journey toward prosperous
              returns.
            </p>
            <p className="bold-font">Features & Benefits</p>
            <p>
              Trusted by millions of customers, Lejhro Fixed Deposit is the
              safest investment option with attractive interest rates.
            </p>
          </div>
          <div className="row">
            <div className="col-sm-12 col-lg-4">
              <div className="icon">
                <FaMoneyBillTransfer />
              </div>
              <p className="icon-head">Simple and Transparent</p>
              <p>
                We have an easy-to-use platform where you get a dedicated wealth
                manager to build and maintain your portfolio.
              </p>
            </div>
            <div className="col-sm-12 col-lg-4">
              <div className="icon">
                <FaCoins />
              </div>
              <p className="icon-head">Greater Return</p>
              <p>
                Multiply your savings safely and smartly by earning 2 times more
                than your FD returns
              </p>
            </div>
            <div className="col-sm-12 col-lg-4">
              <div className="icon">
                <FaIndianRupeeSign />
              </div>
              <p className="icon-head">Monthly Cash Flow</p>
              <p>
                Invest and get your passive income seamlessly through the
                monthly repayments. No hidden charges included
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row">
          <p className="text-center bold-font">How to Apply?</p>
          <p className="text-center">
            Applying for Lejhro Fixed Deposit online is easy. Book your Lejhro
            Fixed Deposit in four easy steps.
          </p>
          <div className="col-sm-12 col-lg-6">
            <img src={steps} className="img-fluid" alt="" />
          </div>
          <div className="col-sm-12 col-lg-6">
            <p className="icon-head">Step 01</p>
            <p>Register using your mobile number</p>
            <p className="icon-head">Step 02</p>
            <p>Enter PAN details and investment amount</p>
            <p className="icon-head">Step 03</p>
            <p>Enter tenure, KYC & bank details and complete your payment</p>
            <p className="icon-head">Step 04</p>
            Receive fixed deposit receipt and maximise your returns
          </div>
        </div>
      </div>
      <div className="container-fluid gray mt-5">
        <div className="container ">
          <div className="row interest">
            <p className="bold-font text-center">Interest & Charges</p>
            <p className="text-center">
              A Fixed Deposit is a safe investment and independent of market
              fluctuations. Check Lejhro Finance Fixed Deposit interest rates
              and charges.
            </p>
            <button>Interest Rates</button>
            <div className="interest-rate">
              <p className="text-center">Interest rates</p>
              <p className="text-center icon-head">1% per month</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialBody;

import React from "react";
import { MdPhone } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import "./contact.css";
const ContactBody = () => {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-sm-12 col-lg-6 mb-5">
          <form>
            <label for="inp" class="inp">
              <input type="text" id="inp" placeholder="&nbsp;" required />
              <span class="label">
                FIRST NAME<span className="text-danger">*</span>
              </span>
              <span class="focus-bg"></span>
            </label>{" "}
            <label for="inp" class="inp">
              <input type="text" id="inp" placeholder="&nbsp;" required />
              <span class="label">
                LAST NAME<span className="text-danger">*</span>
              </span>
              <span class="focus-bg"></span>
            </label>
            <label for="inp" class="inp">
              <input type="text" id="inp" placeholder="&nbsp;" required />
              <span class="label">
                EMAIL<span className="text-danger">*</span>
              </span>
              <span class="focus-bg"></span>
            </label>
            <label for="inp" class="inp">
              <input type="text" id="inp" placeholder="&nbsp;" required />
              <span class="label">
                PHONE NUMBER<span className="text-danger">*</span>
              </span>
              <span class="focus-bg"></span>
            </label>
            <label for="inp" class="inp">
              <input type="text" id="inp" placeholder="&nbsp;" required />
              <span class="label">
                COMPANY NAME<span className="text-danger">*</span>
              </span>
              <span class="focus-bg"></span>
            </label>
            <div className="submit-btn mt-5 mb-3">
              <button>Submit</button>
            </div>
          </form>
        </div>
        <div className="col-sm-12 col-lg-6 address">
          <div>
            <p>
              <MdPhone />
              +91 993 717 5522
            </p>
            <p>
              <MdEmail />
              contact@lejhro.com
            </p>
          </div>
          <div>
            <p className="size-increase">Mailing Address</p>
            <p>Lejhro Technology Pvt. Ltd.</p>
            <p>LB 193, Bhimatangi, Phase II,</p>
            <p>Bhubaneswar 751002</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactBody;

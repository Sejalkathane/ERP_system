// Footer.js

import React from "react";
import "./footer.css"; // Import your CSS file
import goo from "./img/google.png";
import facebook from "./img/facebook.png";
import linkdein from "./img/linkedin.png";
import twit from "./img/twitter.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-cont">
        <div className="menu">
          <h6>Main Feature</h6>
          <div>
            <li>Products</li>
            <li>Orders</li>
          </div>
        </div>
        <div className="add">
          <div>Contact</div>
          <div>Ganpati Nagar,Dastur Nagar, Amravati</div>
          <div>
            <h6>Phone No:+01324124414,3554232553</h6>{" "}
          </div>
          <div className="image">
            <img src={goo} alt="My" />
            <img src={facebook} alt="My" />
            <img src={linkdein} alt="My" />
            <img src={twit} alt="My" />
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 ERP. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;

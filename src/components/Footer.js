// Footer.js

import React from "react";
import "./footer.css"; // Import your CSS file
import goo from "./img/google.png";
import facebook from "./img/facebook.png";
import linkdein from "./img/linkedin.png";
import twit from "./img/twitter.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-cont">
        <div className="menu">
          <h4>Main Feature</h4>
          <div className="menu_li">
            <div className="list">
              <Link to="/products" className="my_footer_link">
                Products
              </Link>
              <Link to="/order" className="my_footer_link">
                Orders
              </Link>
              <Link to="/" className="my_footer_link">
                Dynamic data
              </Link>
            </div>
            <div className="list">
              <Link to="/cal" className="my_footer_link">
                Calendar
              </Link>

              <Link to="/contact" className="my_footer_link">
                Support
              </Link>
            </div>
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

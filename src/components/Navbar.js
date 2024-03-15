 

// Navbar.js
import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  
  return (
    <div className="nav-cont">
      <nav>
        <div>
          <h3 className="brand">ERP</h3>
        </div>
        <ul>
          <li>
            <Link to="/"   className="nav_link">Home</Link>
          </li>
          <li>
            <Link to="/products" className="nav_link">Products</Link>
          </li>
          <li>
            <Link to="/order" className="nav_link">Orders</Link>
          </li>
          <li>
            <Link to="/cal" className="nav_link">Calendar</Link>
          </li>
          <li>
            <Link to="/contact" className="nav_link">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;

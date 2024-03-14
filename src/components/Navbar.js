 

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
            <Link to="/" >Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/order">Orders</Link>
          </li>
          <li>
            <Link to="/aboutus">Aboutus</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;

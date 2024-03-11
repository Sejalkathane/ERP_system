import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <>
      <nav>
        <div>
          <h3 className="brand">ERP</h3>
        </div>
        <div>
          <ul>
            <li>
              <a href="/">Dashboard</a>
            </li>
            <li>
              <a href="/products">Products</a>
            </li>
            <li>
              <a href="/orders">Orders</a>
            </li>
            <li>
              <a href="/about">About US</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
            <li>
              <a href="/signin">Sign in</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

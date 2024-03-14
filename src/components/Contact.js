// Contact.js
import React from "react";
import { useSelector } from "react-redux";
import Navbar from "./Navbar";

const Contact = () => {
  // Access product state from Redux store
  const products = useSelector(state => state.products.products);

  return (
    <>
      <Navbar />
      <h1>Product List</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <strong>Name:</strong> {product.name}<br />
            <strong>Category:</strong> {product.category}<br />
            <strong>Price:</strong> ${product.price}<br />
            <strong>Stock:</strong> {product.stock}<br />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Contact;

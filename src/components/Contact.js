// ProductList.js
import React from 'react';
import { useSelector } from 'react-redux';
import Navbar from './Navbar';

const ProductList = () => {
  // Access products state from Redux store
  const products = useSelector(state => state.products);

  return (
    <div>
      <Navbar/>
      <h2>Product List</h2>
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
    </div>
  );
};

export default ProductList;

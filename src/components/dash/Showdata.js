// DataAnalysis.js

import React from "react";
import { useSelector } from "react-redux";
import "./showdata.css";

function DataAnalysis() {
  const orders = useSelector((state) => state.orders.orders);
  const products = useSelector((state) => state.products.products);

  // Calculate total number of orders
  const totalOrders = orders.length;

  // Calculate total number of products
  const totalProducts = products.length;

  // Calculate total price
  let totalPrice = 0;
  orders.forEach((order) => {
    totalPrice += order.price * order.numberOfItems;
  });

  // Calculate total rating
  let totalRating = 0;
  orders.forEach((order) => {
    totalRating += order.customerRating;
  });

  // Calculate average rating
  const averageRating = totalOrders > 0 ? totalRating / totalOrders : 0;

  // Log or display the data
  console.log("Total number of orders:", totalOrders);
  console.log("Total number of products:", totalProducts);
  console.log("Total price:", totalPrice);
  console.log("Average rating:", averageRating);

  // Return JSX to display the data if needed
  return (
    <>
      <h2 className="head_data">Data Analysis</h2>
    <div className="showdata" >
      <div className="card_show">

        <p>Total No. of Orders</p>
        <h3>{totalOrders}</h3>

      </div>
      <div className="card_show">
        <p>Total No. of Products</p>
        <h3> {totalProducts}</h3>
      </div>

      <div className="card_show">
        <p>Total Expences</p>
        <h3>{totalPrice}</h3>
      </div>
      <div className="card_show">
        <p>Average Rating</p>
        <h3>{averageRating.toFixed(2)}</h3>
      </div>
    </div>
    </>
  );
}

export default DataAnalysis;

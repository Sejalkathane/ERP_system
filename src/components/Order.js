// Order.js
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addOrder, editOrder, deleteOrder } from "./Actionfol/OrderAction";
import Navbar from "./Navbar";

function Order() {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.orders.orders);
  const [customerName, setCustomerName] = useState("");
  const [orderDate, setOrderDate] = useState("");
  const [status, setStatus] = useState("");
  const [editOrderId, setEditOrderId] = useState(null); // Track the ID of the order being edited
  const [selectedOrderId, setSelectedOrderId] = useState(null); // Track the ID of the selected order for viewing details

  // Function to handle adding or updating an order
  const handleSaveOrder = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    if (editOrderId !== null) {
      // If an order is being edited, update it
      dispatch(editOrder(editOrderId, { customerName, orderDate, status }));
      setEditOrderId(null); // Clear edit order ID after updating
    } else {
      // If not editing, add a new order
      dispatch(
        addOrder({ id: orders.length + 1, customerName, orderDate, status })
      );
    }
    // Clear form fields after adding or updating order
    setCustomerName("");
    setOrderDate("");
    setStatus("");
  };

  // Function to handle editing an order
  const handleEditOrder = (orderId, customerName, orderDate, status) => {
    // Set form fields to the order details for editing
    setCustomerName(customerName);
    setOrderDate(orderDate);
    setStatus(status);
    setEditOrderId(orderId); // Set the ID of the order being edited
  };

  // Function to handle deleting an order
  const handleDeleteOrder = (orderId) => {
    dispatch(deleteOrder(orderId));
  };

  // Function to handle viewing order details
  const handleViewOrderDetails = (orderId) => {
    setSelectedOrderId(orderId); // Set the selected order ID for viewing details
  };

  return (
    <div>
      <Navbar />
      <h2>Order Management</h2>
      <form onSubmit={handleSaveOrder}>
        <label>
          Customer Name:
          <input
            type="text"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            required
          />
        </label>
        <label>
          Order Date:
          <input
            type="date"
            value={orderDate}
            onChange={(e) => setOrderDate(e.target.value)}
            required
          />
        </label>
        <label>
          Status:
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            required
          >
            <option value="">Select Status</option>
            <option value="Pending">Pending</option>
            <option value="Shipped">Shipped</option>
            <option value="Completed">Completed</option>
          </select>
        </label>
        <button type="submit">
          {editOrderId !== null ? "Update Order" : "Add Order"}
        </button>
      </form>
      <ul>
        {orders.map((order) => (
          <li key={order.id}>
            <div>
              <strong>Order ID:</strong> {order.id}
              <br />
              <strong>Customer Name:</strong> {order.customerName}
              <br />
              <strong>Order Date:</strong> {order.orderDate}
              <br />
              <strong>Status:</strong> {order.status}
            </div>
            <button
              onClick={() =>
                handleEditOrder(
                  order.id,
                  order.customerName,
                  order.orderDate,
                  order.status
                )
              }
            >
              Edit
            </button>
            <button onClick={() => handleDeleteOrder(order.id)}>Delete</button>
            <button onClick={() => handleViewOrderDetails(order.id)}>View Details</button>
          </li>
        ))}
      </ul>
      {/* Display order details */}
      {selectedOrderId !== null && (
        <div>
          <h3>Order Details</h3>
          <p>Order ID: {selectedOrderId}</p>
          {/* Add more details as needed */}
        </div>
      )}
    </div>
  );
}

export default Order;

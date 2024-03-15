// Order.js
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addOrder, editOrder, deleteOrder } from "../Actionfol/OrderAction";
import Navbar from "../Navbar";
import Footer from "../Footer";
import OrderList from "./OrderList";

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
      <div className="form-container">
        <h2>Order Management</h2>
        <form onSubmit={handleSaveOrder}>
          <label>
            Customer Name:
            <input
              type="text"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              required
              className="input-box"
            />
          </label>
          <label>
            Order Date:
            <input
              type="date"
              value={orderDate}
              onChange={(e) => setOrderDate(e.target.value)}
              required
              className="input-box"
            />
          </label>
          <label>
            Status:
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              required
              className="input-box"
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
      </div>

      <div>
        <h2 style={{margin:"10px" , padding:"20px" ,textAlign:"center"}}>Ordered product list</h2>
        <OrderList
          orders={orders}
          onEditOrder={handleEditOrder}
          onDeleteOrder={handleDeleteOrder}
          onViewOrderDetails={handleViewOrderDetails}
        />

        {/* {selectedOrderId !== null && (
        <div>
          <h3>Order Details</h3>
          <p>Order ID: {selectedOrderId}</p>
        </div>
      )} */}
      </div>

      < Footer/>
    </div>
  );
}

export default Order;

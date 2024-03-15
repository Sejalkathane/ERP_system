import React, { useState } from "react";
import "../Products/procard.css";
import "./viedetail.css";

function OrderList({ orders, onEditOrder, onDeleteOrder, onViewOrderDetails }) {
  const [showModal, setShowModal] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);

  const handleViewDetails = (order) => {
    setSelectedOrder(order);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedOrder(null);
  };

  return (
    <div className="Prod_data">
      <div className="card_data">
        {orders.map((order) => (
          <div key={order.id} className="product-card my-custom-class">
            <div>
              <strong>Order ID:</strong> {order.id}
              <br />
              <strong>Customer Name:</strong> {order.customerName}
              <br />
              <strong>Order Date:</strong> {order.orderDate}
              <br />
              <strong>Status:</strong> {order.status}
            </div>
            <div className="button-container">
              <button
                className="edit-button"
                onClick={() =>
                  onEditOrder(
                    order.id,
                    order.customerName,
                    order.orderDate,
                    order.status
                  )
                }
              >
                Edit
              </button>
              <button
                className="delete-button"
                onClick={() => onDeleteOrder(order.id)}
              >
                Delete
              </button>
              <button
                className="delete-button"
                onClick={() => handleViewDetails(order)}
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {showModal && selectedOrder && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>
              &times;
            </span>
            <h2>Order Details</h2>
            <p>
              <strong>Order ID:</strong> {selectedOrder.id}
            </p>
            <p>
              <strong>Customer Name:</strong> {selectedOrder.customerName}
            </p>
            <p>
              <strong>Order Date:</strong> {selectedOrder.orderDate}
            </p>
            <p>
              <strong>Status:</strong> {selectedOrder.status}
            </p>
            <p>
              <strong>Price:</strong> ${selectedOrder.price}
            </p>
            <p>
              <strong>Category:</strong> {selectedOrder.category}
            </p>
            <p>
              <strong>Number of Items:</strong> {selectedOrder.numberOfItems}
            </p>
            <p>
              <strong>Product Name:</strong> {selectedOrder.productName}
            </p>
            <p>
              <strong>Product ID:</strong> {selectedOrder.productId}
            </p>
            <p>
              <strong>Product Description:</strong>{" "}
              {selectedOrder.productDescription}
            </p>
            <p>
              <strong>Customer Rating:</strong> {selectedOrder.customerRating}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default OrderList;

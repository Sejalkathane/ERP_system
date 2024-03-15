// ProdCard.js
import React from "react";
import "./procard.css"; // Import the CSS file

const ProdCard = ({ products, onEdit, onDelete }) => {
  const handleEdit = (productId) => {
    onEdit(productId);
  };

  const handleDelete = (productId) => {
    onDelete(productId);
  };

  return (
    <div className="Prod_data">
      <div className="card_data">
        {products.map((product) => (
          <div className="product-card my-custom-class" key={product.id}>
            {/* Add your custom class name here */}
            <h3>{product.name}</h3>
            <p>
              <strong>Category:</strong> {product.category}
            </p>
            <p>
              <strong>Price:</strong> ${product.price}
            </p>
            <p>
              <strong>Stock:</strong> {product.stock}
            </p>
            <div className="button-container">
              <button className="edit-button" onClick={() => handleEdit(product.id)}>Edit Product</button>
              <button className="delete-button" onClick={() => handleDelete(product.id)}>Delete Product</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProdCard;

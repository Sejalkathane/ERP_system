// Product.js
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, editProduct, deleteProduct } from "./Action";
import Navbar from "./Navbar";

const Product = () => {
  const dispatch = useDispatch(); // Initialize useDispatch hook

  // Retrieve product data from Redux store
  const products = useSelector((state) => state.products);

  // Local state for managing form inputs
  const [productName, setProductName] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productStock, setProductStock] = useState("");
  const [editProductId, setEditProductId] = useState(null);

  // Dispatch addProduct action
  const handleAddProduct = () => {
    // Dispatch action to add product
    dispatch(
      addProduct({
        id: Date.now(),
        name: productName,
        category: productCategory,
        price: parseFloat(productPrice),
        stock: parseInt(productStock)
      })
    );
    // Clear form inputs
    setProductName("");
    setProductCategory("");
    setProductPrice("");
    setProductStock("");
  };

  // Dispatch editProduct action
  const handleEditProduct = (productId) => {
    // Find product by id
    const productToEdit = products.find((product) => product.id === productId);
    // Set form inputs to product values
    if (productToEdit) {
      setEditProductId(productId);
      setProductName(productToEdit.name);
      setProductCategory(productToEdit.category);
      setProductPrice(productToEdit.price.toString());
      setProductStock(productToEdit.stock.toString());
    }
  };

  // Dispatch editProduct action
  const handleUpdateProduct = () => {
    // Dispatch action to update product
    dispatch(
      editProduct(editProductId, {
        id: editProductId,
        name: productName,
        category: productCategory,
        price: parseFloat(productPrice),
        stock: parseInt(productStock)
      })
    );
    // Clear form inputs
    setEditProductId(null);
    setProductName("");
    setProductCategory("");
    setProductPrice("");
    setProductStock("");
  };

  // Dispatch deleteProduct action
  const handleDeleteProduct = (productId) => {
    // Dispatch action to delete product
    dispatch(deleteProduct(productId));
  };

  return (
    <div>
      <Navbar />
      <h1>Product List</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <strong>Name:</strong> {product.name}
            <br />
            <strong>Category:</strong> {product.category}
            <br />
            <strong>Price:</strong> ${product.price}
            <br />
            <strong>Stock:</strong> {product.stock}
            <br />
            <button onClick={() => handleEditProduct(product.id)}>Edit</button>
            <button onClick={() => handleDeleteProduct(product.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <h2>{editProductId ? "Edit Product" : "Add Product"}</h2>
      <input
        type="text"
        placeholder="Name"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="Category"
        value={productCategory}
        onChange={(e) => setProductCategory(e.target.value)}
      />
      <br />
      <input
        type="number"
        placeholder="Price"
        value={productPrice}
        onChange={(e) => setProductPrice(e.target.value)}
      />
      <br />
      <input
        type="number"
        placeholder="Stock"
        value={productStock}
        onChange={(e) => setProductStock(e.target.value)}
      />
      <br />
      {editProductId ? (
        <button onClick={handleUpdateProduct}>Update Product</button>
      ) : (
        <button onClick={handleAddProduct}>Add Product</button>
      )}
    </div>
  );
};

export default Product;

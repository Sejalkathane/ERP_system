// Product.js
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, editProduct, deleteProduct } from "../Actionfol/ProAction";
import Navbar from "../Navbar";
import Footer from "../Footer";
import ProdCard from "./ProdCard";
import  "./products.css"

const Product = () => {
  const dispatch = useDispatch(); // Initialize useDispatch hook

  // Retrieve product data from Redux store
  const products = useSelector((state) => state.products.products);

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
        stock: parseInt(productStock),
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
        stock: parseInt(productStock),
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
      <div className="form-container">
      <h2>{editProductId ? "Edit Product" : "Add Product"}</h2>
      <input
        type="text"
        placeholder="Name"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
        className="input-box"
      />
      <br />
      <select
        value={productCategory}
        onChange={(e) => setProductCategory(e.target.value)}
        className="input-box"
      >
        <option value="">Select Category</option>
        <option value="Electronics">Electronics</option>
        <option value="Cloth">Cloth</option>
        <option value="Shoes">Shoes</option>
        <option value="Other">Other</option>
      </select>
      <br />
      <input
        type="number"
        placeholder="Price"
        value={productPrice}
        onChange={(e) => setProductPrice(e.target.value)}
        className="input-box"
      />
      <br />
      <input
        type="number"
        placeholder="Stock"
        value={productStock}
        onChange={(e) => setProductStock(e.target.value)}
        className="input-box"
      />
      <br />
      {editProductId ? (
        <button className="update-button" onClick={handleUpdateProduct}>Update Product</button>
      ) : (
        <button className="add-button" onClick={handleAddProduct}>Add Product</button>
      )}
    </div>
      <div>
        <h1 className="pro_list_name">Product List</h1>
        <ProdCard
          products={products}
          onEdit={handleEditProduct}
          onDelete={handleDeleteProduct}
        />
      </div>

      <Footer />
    </div>
  );
};

export default Product;

// {/* <ul>
//         {products.map((product) => (
//           <li key={product.id}>
//             <strong>Name:</strong> {product.name}
//             <br />
//             <strong>Category:</strong> {product.category}
//             <br />
//             <strong>Price:</strong> ${product.price}
//             <br />
//             <strong>Stock:</strong> {product.stock}
//             <br />
//             <button onClick={() => handleEditProduct(product.id)}>Edit</button>
//             <button onClick={() => handleDeleteProduct(product.id)}>Delete</button>
//           </li>
//         ))}
//       </ul> */}

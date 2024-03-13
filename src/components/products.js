import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Navbar from "./Navbar";
import { addProduct, editProduct, deleteProduct } from "./Action";

const App = () => {
  const initialProducts = [
    { id: 1, name: "Product 1", category: "Category A", price: 10, stock: 20 },
    { id: 2, name: "Product 2", category: "Category B", price: 20, stock: 15 },
    { id: 3, name: "Product 3", category: "Category C", price: 15, stock: 30 },
  ];

  const [products, setProducts] = useState(initialProducts);
  const [productName, setProductName] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productStock, setProductStock] = useState("");
  const [editProductId, setEditProductId] = useState(null);

  useEffect(() => {
    // Save products to localStorage when it changes
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  const handleAddProduct = () => {
    if (productName && productCategory && productPrice && productStock) {
      const newProduct = {
        id: Date.now(),
        name: productName,
        category: productCategory,
        price: parseFloat(productPrice),
        stock: parseInt(productStock),
      };
      setProducts((prevProducts) => [...prevProducts, newProduct]);
      setProductName("");
      setProductCategory("");
      setProductPrice("");
      setProductStock("");
    }
  };

  const handleEditProduct = (productId) => {
    const productToEdit = products.find((product) => product.id === productId);
    if (productToEdit) {
      setEditProductId(productId);
      setProductName(productToEdit.name);
      setProductCategory(productToEdit.category);
      setProductPrice(productToEdit.price.toString());
      setProductStock(productToEdit.stock.toString());
    }
  };

  const handleUpdateProduct = () => {
    if (productName && productCategory && productPrice && productStock) {
      const updatedProducts = products.map((product) => {
        if (product.id === editProductId) {
          return {
            ...product,
            name: productName,
            category: productCategory,
            price: parseFloat(productPrice),
            stock: parseInt(productStock),
          };
        }
        return product;
      });
      setProducts(updatedProducts);
      setEditProductId(null);
      setProductName("");
      setProductCategory("");
      setProductPrice("");
      setProductStock("");
    }
  };

  const handleDeleteProduct = (productId) => {
    const updatedProducts = products.filter(
      (product) => product.id !== productId
    );
    setProducts(updatedProducts);
  };

  return (
    <div>
      <Navbar/>
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
            <button onClick={() => handleDeleteProduct(product.id)}>
              Delete
            </button>
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

const mapStateToProps = (state) => ({
  products: state.products,
});

const mapDispatchToProps = {
  addProduct,
  editProduct,
  deleteProduct,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

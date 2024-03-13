import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import "./App.css";
import Products from "./components/Products";
import Order from "./components/Order";
import Dashboard from "./components/Dashboard";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";

import { useEffect } from "react";
import { useDispatch, Provider } from "react-redux";
import { fetchProducts } from "./components/Action"; // Assuming you have an action to fetch products
import store from "./Store";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/order",
    element: <Order />,
  },
  {
    path: "/aboutus",
    element: <AboutUs />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    // Fetch product data when the application starts
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </>
  );
}

export default App;

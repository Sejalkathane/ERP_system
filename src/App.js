import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import "./App.css";
// import { Link } from "react-router-dom";
import Products from "./components/Products";
import Order from "./components/Order";
import Dashboard from "./components/Dashboard";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />
  },
  {
    path: "/products",
    element: <Products />
  },
  {
    path: "/order",
    element: <Order />
  },
  {
    path: "/aboutus",
    element: <AboutUs />
  },
  {
    path: "/contact",
    element: <Contact />
  },
]);
    
    
function App() {
  return (
    <>
    <RouterProvider router={router} />
    </>
  );
}

export default App;

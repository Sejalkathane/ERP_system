import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import "./App.css";
import Products from "./components/Products";
import Order from "./components/Order";
import Dashboard from "./components/Dashboard";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";

import store from "./Store";
import { Provider } from "react-redux";

const router = createBrowserRouter([
  {
    
    path: "/",
    element: <Dashboard />,
    exact:true,
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
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </>
  );
}

export default App;

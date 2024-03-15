import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import "./App.css";
import Products from "./components/Products/Products";
import Order from "./components/Order/Order";
import Dashboard from "./components/Dashboard";
import Cal from "./components/Order/OrderCalender";
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
    path: "/cal",
    element: <Cal />,
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












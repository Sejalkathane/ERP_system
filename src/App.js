import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import "./App.css";
import Dashboard from "./components/Dashboard";
// import Pie from "./components/Pie";

const item = {
  id: 1,
  name: "Sejal",
  surname: "kathane",
  email: "kathanesejal@gmail.com",
};

function App() {
  return (
    <Router>
      <div className="main-container">
        <Dashboard item={item} />
        {/* <Pie/> */}
      </div> 
       
    </Router>
  );
}

export default App;

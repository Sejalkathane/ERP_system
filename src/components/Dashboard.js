import React from "react";
import "./dashboard.css";
import Navbar from "./Navbar";
import Page from "./dash/Page";
import "./dashboard.css";
// import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div>
        <Navbar />
      </div>
      <div>
        <Page />
      </div>
    </div>
  );
};


export default Dashboard;

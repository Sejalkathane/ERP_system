import React from "react";
import "./dashboard.css";
import Navbar from "./Navbar";
import Page from "./dash/Page";
import "./dashboard.css";
// import { Link } from "react-router-dom";
// import Footer from "./Footer";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Navbar />
      <Page />
    </div>
  );
};

export default Dashboard;

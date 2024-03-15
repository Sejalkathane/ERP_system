import React from "react";
import "./dashboard.css";
import Navbar from "./Navbar";
import Page from "./dash/Part";
import "./dashboard.css";
// import { Link } from "react-router-dom";
import Footer from "./Footer";
import Feature from "./dash/Feature";
import Text from "./dash/Text";
import ProdCatChart from "./dash/ProdCatChart";
import OrderStatusChart from "./dash/OrderStatusChart";
import OrderMonthChart from "./dash/OrderMonthChart";
import RevChat from "./dash/AddBarRevChart.js";
import Showdata from "./dash/Showdata.js";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Navbar />
      <Page />
      <Feature />
      <Text />
      <Showdata />
      <div
        style={{
          height: "15px",
          borderRadius: "10px",
          backgroundColor: "rgb(59, 130, 202)",
          marginTop: "5%",
        }}
      ></div>

      <ProdCatChart />
      <div
        style={{
          height: "15px",
          borderRadius: "10px",
          backgroundColor: "rgb(59, 130, 202)",
          marginTop: "5%",
        }}
      ></div>
      <OrderStatusChart />
      <div
        style={{
          height: "15px",
          borderRadius: "10px",
          backgroundColor: "rgb(59, 130, 202)",
          marginTop: "5%",
        }}
      ></div>
      <OrderMonthChart />
      <div
        style={{
          height: "15px",
          borderRadius: "10px",
          backgroundColor: "rgb(59, 130, 202)",
          marginTop: "5%",
        }}
      ></div>
      <RevChat />

      <Footer />
    </div>
  );
};

export default Dashboard;


import React from "react";
// import { Link } from "react-router-dom";
import Navbar from "./Navbar.js";
import Footer from "./Footer.js";

const Dashboard = (props) => {
  return (
    <>
      <div className="dashboard-container">
         <Navbar/>
         <Footer/>
      </div>
    </>
  );
};

export default Dashboard;

  /* <div>
        <p>
          <b>
            My name is {props.item.name} and my suname is
            {props.item.surname} . My id is {props.item.id} and email is
            {props.item.email}
          </b>
        </p>
  </div> */


import React from "react";
import "./feature.css";
import product from "../img/product.png";
import order from "../img/order.png";
import graph from "../img/graph.png";
import cal from "../img/cal.png";
import support from "../img/support.png";



function Feature() {
  return (
    <div className="Main-feature">
      <div className="head-feature"> Key Feature </div>
      <div className="featurebox">
        <div className="fea bb2">
          <img src={product} alt="" className="fea_img"/>
          <div className="name">Project Managment</div>
        </div>

        <div className="fea bb2">
          <img src={order} alt="" className="fea_img"/>
          <div className="name">Order Managment</div>
        </div>

        <div className="fea bb2">
          <img src={graph} alt="" className="fea_img"/>
          <div className="name">Chart  <br /> Data</div>
        </div>

        <div className="fea bb2">
          <img src={cal} alt="" className="fea_img"/>
          <div className="name">Order <br />  Calendar</div>
        </div>

        <div className="fea bb2">
          <img src={support} alt="" className="fea_img"/>
          <div className="name">24/7  <br /> Support</div>
        </div>
      </div>
    </div>
  );
}

export default Feature;

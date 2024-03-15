import React from "react";
import "./part.css";
import flow from "../img/flow.png"

function Page() {
  return (
    <div className="about">
      <div className="text">
      <div className="aboutitem smallinfo">Get Real Time Data</div>
      <div className="aboutitem head">Explore More!</div>
      <h2 className="aboutitem buy">Let's Begin</h2>
      </div>
          <div className="imageone">
              <img src={flow} alt="notfound"  className="main_img"/>
          </div>

    </div>
  );
}

export default Page;

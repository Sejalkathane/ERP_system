import React from "react";
import "./prodcatchart.css";
import { useSelector } from "react-redux";
import PieChart from "../Products/Pro_Cat_PieChart";

function Prod_cat_chart() {
  const products = useSelector((state) => state.products.products);
  const categoryCounts = products.reduce((acc, product) => {
    acc[product.category] = (acc[product.category] || 0) + 1;
    return acc;
  }, {});
  return (
    <div className="chart_main_div">
      <h6 className="char1_txt">* Distribution of Products by Category</h6>
      <div className="chart1">
        <div className="data">
          <h2>Product Categories</h2>
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Sr. No.</th>
                  <th>Category</th>
                  <th>Count</th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(categoryCounts).map((category, index) => (
                  <tr key={category}>
                    <td>{index + 1}.</td>
                    <td>{category}</td>
                    <td>{categoryCounts[category]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="real_chart">
          <PieChart products={products} />
        </div>
      </div>
    </div>
  );
}

export default Prod_cat_chart;

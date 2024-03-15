import React from "react";
import { useSelector } from "react-redux";
// import PieChart from './Products/Pro_Cat_PieChart.js';
import Barchart from "../Order/RevenueChart";
import "./orderstatuschart.css";

const Revenue = () => {
  const orders = useSelector((state) => state.orders.orders);

  const categoryRevenue = orders.reduce((acc, order) => {
    const { category, price, numberOfItems } = order;
    const totalRevenue = price * numberOfItems;
    const existingCategory = acc.find((item) => item.category === category);

    if (existingCategory) {
      existingCategory.revenue += totalRevenue;
    } else {
      acc.push({ category, revenue: totalRevenue });
    }

    return acc;
  }, []);
  return (
    <div className="chart_main_div">
      <h6 className="char1_txt">* Distribution of Revenue by Category</h6>
      <div className="chart1">
        <div className="real_chart">
          <Barchart orders={orders} />
        </div>

        <div className="data">
          <h2>Revenue Summary by Category</h2>
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Sr.No</th>
                  <th>Category</th>
                  <th>Revenue</th>
                </tr>
              </thead>
              <tbody>
                {categoryRevenue.map((category, index) => (
                  <tr key={index}>
                    <td>{index + 1}.</td>
                    <td>{category.category}</td>
                    <td>Rs.{category.revenue.toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Revenue;

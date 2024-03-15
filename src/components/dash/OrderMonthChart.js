import React from "react";
import { useSelector } from "react-redux";
// import "./ordermonthchar.css";
import Linechart from "../Order/MonthChart";

function OrderMonthChart() {
  const orders = useSelector((state) => state.orders.orders);

  const countOrdersByMonth = (orders) => {
    const orderCounts = {};
    orders.forEach((order) => {
      const month = new Date(order.orderDate).toLocaleString('default', { month: 'long' }); // Get month name
      orderCounts[month] = (orderCounts[month] || 0) + 1;
    });
    return orderCounts;
  };

  // Count orders by month
  const orderCounts = countOrdersByMonth(orders);

  // Array of month names
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const index=0;

  return (
    <div className="chart_main_div">
      <h6 className="char1_txt">* Distribution of No. of Orders by Month</h6>
      <div className="chart1">
        <div className="data">
          <h2>Order Summary</h2>
          <div className="table-container">
            <h2>Number of Orders by Month</h2>
            <table>
              <thead>
                <tr>
                    <th>Sr. No</th>
                  <th>Month</th>
                  <th>Number of Orders</th>
                </tr>
              </thead>
              <tbody>
                {months.map((month,index) => (
                  <tr key={month}>
                    <td>{index + 1}.</td>
                    <td>{month}</td>
                    <td>{orderCounts[month] || 0}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="real_chart">
          <Linechart orders={orders} />
        </div>
      </div>
    </div>
  );
}

export default OrderMonthChart;

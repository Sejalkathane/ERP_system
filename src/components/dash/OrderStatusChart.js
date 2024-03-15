import React from "react";
import { useSelector } from "react-redux";
import PieChart from "../Order/Orderpie";

function OrderStatusChart() {
  const orders = useSelector((state) => state.orders.orders);

  const statusCounts = orders.reduce((acc, order) => {
    acc[order.status] = (acc[order.status] || 0) + 1;
    return acc;
  }, {});

  return (
    <div className="chart_main_div">
      <h6 className="char1_txt">* Distribution of Orders by Status</h6>
      <div className="chart1">
        <div className="real_chart">
          <PieChart orders={orders} />
        </div>

        <div className="data">
          <h2>Order Summary</h2>
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Sr.No</th>
                  <th>Status</th>
                  <th>Count</th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(statusCounts).map((status, index) => (
                  <tr key={index}>
                    <td>{index + 1}.</td>
                    <td>{status}</td>
                    <td>{statusCounts[status]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderStatusChart;

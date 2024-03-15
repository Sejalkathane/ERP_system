

import React, { useRef, useEffect, useState } from "react";
import Chart from "chart.js/auto";

const LineChart = ({ orders }) => {
  const [chartInstance, setChartInstance] = useState(null);
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartInstance) {
      chartInstance.destroy();
    }

    const ctx = chartRef.current.getContext("2d");
    const orderCounts = countOrdersByMonth(orders);
    const months = Array.from({ length: 12 }, (_, i) => i + 1);
    const data = months.map(month => orderCounts[month] || 0);

    const newChartInstance = new Chart(ctx, {
      type: "line",
      data: {
        labels: months.map(month => month.toString()),
        datasets: [
          {
            label: "Number of Orders",
            data: data,
            fill: false,
            borderColor: "rgb(236, 30, 67)",
            tension: 0.1
          },
        ],
      },
      options: {
        scales: {
          y: {
            suggestedMin: 0
          }
        },
        plugins: {
          title: {
            display: true,
            text: "Number of Orders by Month",
            padding: 20,
            font: {
              size: 16,
              weight: 'bold'
            }
          },
          legend: {
            display: false
          }
        }
      }
    });
    setChartInstance(newChartInstance);

    return () => {
      if (newChartInstance) {
        newChartInstance.destroy();
      }
    };
  }, [orders]);

  const countOrdersByMonth = (orders) => {
    const orderCounts = {};
    orders.forEach(order => {
      const month = parseInt(order.orderDate.split('-')[1]);
      orderCounts[month] = (orderCounts[month] || 0) + 1;
    });
    return orderCounts;
  };

  return (
    <div style={{ maxWidth: "80%", margin: "auto" , borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",  }}>
      <canvas ref={chartRef} style={{ borderRadius: "10px", width: "100%", height: "auto" }} />
    </div>
  );
};

export default LineChart;
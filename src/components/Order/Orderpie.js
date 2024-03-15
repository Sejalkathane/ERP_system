import React, { useRef, useEffect, useState } from "react";
import Chart from "chart.js/auto";

const OrderPieChart = ({ orders }) => {
  const [chartInstance, setChartInstance] = useState(null);
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartInstance) {
      chartInstance.destroy();
    }

    const ctx = chartRef.current.getContext("2d");
    const newChartInstance = new Chart(ctx, {
      type: "pie",
      data: {
        labels: [],
        datasets: [
          {
            data: [],
            backgroundColor: [], // Colors will be added dynamically
          },
        ],
      },
    });
    setChartInstance(newChartInstance);

    return () => {
      if (newChartInstance) {
        newChartInstance.destroy();
      }
    };
  }, [orders]);

  const statusCounts = orders.reduce((acc, order) => {
    acc[order.status] = (acc[order.status] || 0) + 1;
    return acc;
  }, {});

  const statusNames = Object.keys(statusCounts);
  const statusData = Object.values(statusCounts);

  const generateRandomColors = (numColors) => {
    const colors = [];
    for (let i = 0; i < numColors; i++) {
      const r = Math.floor(Math.random() * 200) + 55; // Red component (55-255)
      const g = Math.floor(Math.random() * 200) + 55; // Green component (55-255)
      const b = Math.floor(Math.random() * 200) + 55; // Blue component (55-255)
      const randomColor = `rgba(${r}, ${g}, ${b}, 0.9)`;
      colors.push(randomColor);
    }
    return colors;
  };

  const backgroundColors = generateRandomColors(statusNames.length);

  if (chartInstance) {
    chartInstance.data.labels = statusNames;
    chartInstance.data.datasets[0].data = statusData;
    chartInstance.data.datasets[0].backgroundColor = backgroundColors;
    chartInstance.update();
  }

  return (
    <div
      style={{
        maxWidth: "68%",
        margin: "auto",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Shadow effect
      }}
    >
      <canvas
        ref={chartRef}
        style={{ borderRadius: "10px", width: "100%", height: "auto" }}
      />
    </div>
  );
};

export default OrderPieChart;

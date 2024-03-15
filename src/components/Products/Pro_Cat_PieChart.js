// PieChart.js

import React, { useRef, useEffect, useState } from "react";
import Chart from "chart.js/auto";

const PieChart = ({ products }) => {
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
      options: {
        plugins: {
          legend: {
            display: true,
            position: 'bottom',
          },
        },
        elements: {
          arc: {
            borderWidth: 0,
          },
        },
      },
    });
    setChartInstance(newChartInstance);

    return () => {
      if (newChartInstance) {
        newChartInstance.destroy();
      }
    };
  }, [products]);

  const categoryCounts = products.reduce((acc, product) => {
    acc[product.category] = (acc[product.category] || 0) + 1;
    return acc;
  }, {});

  const categoryNames = Object.keys(categoryCounts);
  const categoryData = Object.values(categoryCounts);

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

  const backgroundColors = generateRandomColors(categoryNames.length);

  if (chartInstance) {
    chartInstance.data.labels = categoryNames;
    chartInstance.data.datasets[0].data = categoryData;
    chartInstance.data.datasets[0].backgroundColor = backgroundColors;
    chartInstance.update();
  }

  // Function to generate random colors

  return (
    <div style={{ maxWidth: "68%", margin: "auto"}}>
      <canvas
        ref={chartRef}
        style={{ borderRadius: "10px", width: "100%", height: "auto", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" }}
      />
    </div>
  );
};

export default PieChart;

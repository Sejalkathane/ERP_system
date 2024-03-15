import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";

const CategoryRevenueChart = ({ orders }) => {
  const chartRef = useRef(null);
  const [chartInstance, setChartInstance] = useState(null);

  useEffect(() => {
    if (chartInstance) {
      chartInstance.destroy();
    }

    const ctx = chartRef.current.getContext("2d");
    const categoryLabels = [];
    const revenueData = [];

    orders.forEach((order) => {
      if (!categoryLabels.includes(order.category)) {
        categoryLabels.push(order.category);
        revenueData.push(order.price * order.numberOfItems);
      } else {
        const index = categoryLabels.indexOf(order.category);
        revenueData[index] += order.price * order.numberOfItems;
      }
    });

    const newChartInstance = new Chart(ctx, {
      type: "bar",
      data: {
        labels: categoryLabels,
        datasets: [
          {
            label: "Revenue",
            data: revenueData,
            backgroundColor: "rgba(54, 162, 235, 0.6)",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)", // Adjust color as needed
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: "Revenue",
            },
          },
          x: {
            title: {
              display: true,
              text: "Category",
            },
          },
        },
        plugins: {
          tooltip: {
            callbacks: {
              label: (context) => `Revenue: Rs.${context.parsed.y}`,
            },
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
  }, [orders]);

  return (
    <canvas ref={chartRef} style={{width:"68%" ,padding:"10px" }}/>
  );
};

export default CategoryRevenueChart;

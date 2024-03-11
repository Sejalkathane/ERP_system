import React, { useEffect, useRef, useState } from 'react';
import "./all.css";

const DynamicPieChart = () => {
  // Sample data (replace this with your dynamic data)
  const [data, setData] = useState([30, 20, 25, 25,50,33,72]);
  const [colors] = useState(['red', 'blue', 'green', 'yellow','purple','orange','black']);

  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = Math.min(centerX, centerY);

    // Function to draw the pie chart
    const drawPieChart = () => {
      let total = data.reduce((acc, value) => acc + value, 0);
      let startAngle = 0;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < data.length; i++) {
        const sliceAngle = (data[i] / total) * (Math.PI * 2);
        ctx.fillStyle = colors[i];

        ctx.beginPath();                                                       
        ctx.moveTo(centerX, centerY);                                          
        ctx.arc(centerX, centerY, radius, startAngle, startAngle + sliceAngle);
        ctx.closePath();                                                       
        ctx.fill();                                                            
                                                                               
        startAngle += sliceAngle;
      }
    };

    // Initial draw
    drawPieChart();
  }, [data, colors]);

  return (
    <div>
      <h2>Dynamic Pie Chart</h2>
      <canvas ref={canvasRef} className='pie_chart' width={300} height={300}></canvas>
    </div>
  );
};

export default DynamicPieChart;



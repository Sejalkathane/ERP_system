import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useSelector } from "react-redux";
import Navbar from "./Navbar";
import "./OrderCalender.css";

function OrderCalendar() {
  const orders = useSelector((state) => state.orders.orders);
  const [selectedDate, setSelectedDate] = useState(null);
  const [ordersForSelectedDate, setOrdersForSelectedDate] = useState([]);

  useEffect(() => {
    if (selectedDate) {
      // Filter orders based on the selected date
      const ordersOnSelectedDate = orders.filter(
        (order) => order.orderDate === selectedDate.toISOString().split("T")[0]
      );
      setOrdersForSelectedDate(ordersOnSelectedDate);
    }
  }, [selectedDate, orders]);

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="calendar-container">
      <Navbar />
      <h2>Order Calendar</h2>
      <Calendar
        value={selectedDate}
        onChange={setSelectedDate}
        onClickDay={handleDateClick}
        tileClassName={({ date }) => {
          const dateString = date.toISOString().split("T")[0];
          return orders.some((order) => order.orderDate === dateString)
            ? "order-date"
            : "";
        }}
      />
      {selectedDate && (
        <div className="orders-for-date">
          <h3>Orders for {selectedDate.toLocaleDateString()}</h3>
          <ul>
            {ordersForSelectedDate.map((order) => (
              <li key={order.id}>
                <strong>Customer Id:</strong> {order.id}
                <br />
                <strong>Customer Name:</strong> {order.customerName}
                <br />
                <strong>Status:</strong> {order.status}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default OrderCalendar;

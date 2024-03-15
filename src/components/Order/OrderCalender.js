import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useSelector } from "react-redux";
import Navbar from "../Navbar";
import Footer from "../Footer";

import "./OrderCalender.css";

function OrderCalendar() {
  const orders = useSelector((state) => state.orders.orders);
  const [selectedDate, setSelectedDate] = useState(null);
  const [ordersForSelectedDate, setOrdersForSelectedDate] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (selectedDate) {
      const ordersOnSelectedDate = orders.filter(
        (order) => order.orderDate === selectedDate.toISOString().split("T")[0]
      );
      setOrdersForSelectedDate(ordersOnSelectedDate);
    }
  }, [selectedDate, orders]);

  const handleDateClick = (date) => {
    setSelectedDate(date);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Navbar />
      <div className="calendar-container">
        <h2 style={{ margin: "10px", padding: "20px", textAlign: "center" }}>
          Order Calendar
        </h2>
        <Calendar
          className="custom-calendar"
          value={selectedDate}
          onChange={setSelectedDate}
          onClickDay={handleDateClick}
          tileClassName={({ date }) => {
            const dateString = date.toISOString().split("T")[0];
            const isOrderDate = orders.some(
              (order) => order.orderDate === dateString
            );
            const isToday =
              date.toDateString() === new Date().toDateString();
            return isOrderDate ? "order-date" : isToday ? "today" : "";
          }}
          calendarType="US"
          tileDisabled={({ date }) => date.getDay() === 0} // Disable Sundays
        />
       
        {showModal && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={handleCloseModal}>
                &times;
              </span>
              <h3>Orders for {selectedDate.toLocaleDateString()}</h3>
              <div>
                {ordersForSelectedDate.map((order) => (
                  <div key={order.id}>
                    <strong>Customer Id:</strong> {order.id}
                    <br />
                    <strong>Customer Name:</strong> {order.customerName}
                    <br />
                    <strong>Status:</strong> {order.status}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer/>
    </>
  );
}

export default OrderCalendar;

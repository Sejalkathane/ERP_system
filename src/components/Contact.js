import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./contact.css"; // Import your custom CSS file
import Navbar from "./Navbar";
import Footer from "./Footer";
import banner from "./img/banner.png";
import goo from "./img/google.png";
import facebook from "./img/facebook.png";
import linkdein from "./img/linkedin.png";
import twit from "./img/twitter.png";

function Contact() {
  const [name, setName] = useState("");
  const [note, setNote] = useState("");
  const [emailSent, setEmailSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Your email.js service ID, template ID, and user ID
    const serviceID = "YOUR_SERVICE_ID";
    const templateID = "YOUR_TEMPLATE_ID";
    const userID = "YOUR_USER_ID";

    // Sending email using EmailJS
    emailjs.sendForm(serviceID, templateID, e.target, userID).then(
      (result) => {
        console.log(result.text);
        setEmailSent(true);
      },
      (error) => {
        console.log(error.text);
      }
    );

    // Clear form fields after sending email
    setName("");
    setNote("");
  };

  return (
    <>
      <Navbar />
      <div className="banner">
        <h1>#Lets Talk</h1>
        <h3>LEAVE A MESSAGE... We love to hear you !</h3>
      </div>
      <div className="contact-container">
        <div className="contact-map-address">
          <div className="contact-map">
            <h2>Location</h2>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59696.753350361025!2d78.57766616304681!3d20.748885604429!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd47f04f15aa69d%3A0xe76e35b13382a66c!2sWardha%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1666433453026!5m2!1sen!2sin"
              width="400"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Map"
            ></iframe>
          </div>
          <div className="contact-address">
            <h2>Address</h2>
            <p>Ganpati Nagar,Dastur Nagar</p>
            <p>Amravati, Maharashtra</p>
            <div>
              <h2>Connect On Social Media</h2>
              <div className="image">
                <img src={goo} alt="My" style={{ width: "40px" }} />
                <img src={facebook} alt="My" style={{ width: "40px" }} />
                <img src={linkdein} alt="My" style={{ width: "40px" }} />
                <img src={twit} alt="My" style={{ width: "40px" }} />
              </div>
            </div>
          </div>
        </div>
        <div className="contact-form">
          <h2>Contact Us</h2>
          {emailSent && <p className="email-sent">Email sent successfully!</p>}
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <label htmlFor="note">Note:</label>
            <textarea
              id="note"
              name="note"
              value={note}
              onChange={(e) => setNote(e.target.value)}
              required
            ></textarea>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;

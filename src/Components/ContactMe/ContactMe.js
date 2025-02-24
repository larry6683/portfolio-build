import React, { useState } from "react";
import "./ContactMe.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // For demonstration purposes
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
    alert("Form submitted!"); // Replace with your logic for form submission
  };

  return (
    <div className="main contactmain">
      <h2 className="contactmeh2">Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <div className="cont">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            placeholder="Enter your subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Explain in detail"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
};

export default ContactUs;

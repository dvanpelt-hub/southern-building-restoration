import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <div className="contact-container-content">
        <h3>Southern Buliding Restoration</h3>
        <p>Office: +44(1420 474960)</p>
        <p>Mobile: +44(7794 059825)</p>
        <p>Email: sbrwebsitebuild@gmail.com</p>
      </div>
      {/* <form className="contact-form">
        <div className="form-group">
          <label>Name:</label>
          <input type="text" name="name" />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" name="email" />
        </div>
        <div className="form-group">
          <label>Message:</label>
          <textarea name="message"></textarea>
        </div>
        <button type="submit">Submit</button>
      </form> */}
    </div>
  );
};

export default Contact;

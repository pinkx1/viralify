import React, { useState } from "react";
import "./ContactForm.css";
import imageContactForm from "../assets/images/image-contact-form2.png";

const ContactForm = () => {
  const [selectedOption, setSelectedOption] = useState("Say Hi");

  return (
    <div className="form-container">
      <form className="form">
        <div className="radio-group">
          <label
            className={`radio-option ${
              selectedOption === "Say Hi" ? "checked" : ""
            }`}
          >
            <input
              type="radio"
              name="contactType"
              value="Say Hi"
              checked={selectedOption === "Say Hi"}
              onChange={(e) => setSelectedOption(e.target.value)}
            />
            <div></div>
            <span>Say Hi</span>
          </label>
          <label
            className={`radio-option ${
              selectedOption === "Get a Quote" ? "checked" : ""
            }`}
          >
            <input
              type="radio"
              name="contactType"
              value="Get a Quote"
              checked={selectedOption === "Get a Quote"}
              onChange={(e) => setSelectedOption(e.target.value)}
            />
            <div></div>
            <span>Get a Quote</span>
          </label>
        </div>
        <div className="field">
          <label className="label" htmlFor="name">
            Name
          </label>
          <input
            className="input"
            id="name"
            type="text"
            placeholder="Name"
          />
        </div>
        <div className="field">
          <label className="label" htmlFor="email">
            Email*
          </label>
          <input
            className="input"
            id="email"
            type="email"
            placeholder="Email"
            required
          />
        </div>
        <div className="field">
          <label className="label" htmlFor="message">
            Message*
          </label>
          <textarea
            className="textarea"
            id="message"
            placeholder="Message"
            required
          />
        </div>
        <button className="send-message-button" type="submit">
          Send Message
        </button>
      </form>
      <div className="image-wrapper">
        <img src={imageContactForm} alt="Contact Form Illustration" />
      </div>
    </div>
  );
};

export default ContactForm;

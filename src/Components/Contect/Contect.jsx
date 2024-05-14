import React, { useState } from "react";
import "./Contect.css";
import msgIcon from "../../assets/msg-icon.png";
import mailIcon from "../../assets/mail-icon.png";
import phoneIcon from "../../assets/phone-icon.png";
import locationIcon from "../../assets/location-icon.png";
import whiteArrow from "../../assets/white-arrow.png";

const Contect = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");

    const formData = new FormData(event.target);
    formData.append("access_key", "894e2fff-ea71-4155-bb84-0dc57b0162dc");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.error("Error:", data);
        setResult(data.message);
      }
    } catch (error) {
      console.error("Error:", error);
      setResult("Failed to submit the form");
    }
  };

  return (
    <div className="contect" id="Contect">
      <div className="contect-col">
        <h3>
          Send us a message <img src={msgIcon} alt="Message Icon" />
        </h3>
        <p>
          Feel free to reach out through the contact form or find our contact
          information below. Your feedback, questions, and suggestions are
          important to us as we strive for exceptional service to our university
          community.
        </p>
        <ul>
          <li>
            <img src={mailIcon} alt="Mail Icon" /> Contact@Test.com
          </li>
          <li>
            <img src={phoneIcon} alt="Phone Icon" /> +1 123-456-7890
          </li>
          <li>
            <img src={locationIcon} alt="Location Icon" />
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Necessitatibus quasi voluptates obcaecati accusantium ipsa mollitia
            voluptas incidunt exercitationem rem quo ipsum libero.
          </li>
        </ul>
      </div>
      <div className="contect-col">
        <form onSubmit={onSubmit}>
          <label>Your Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            required
          />
          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter Your Mobile number"
            required
          />
          <label>Write your Message Here</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Enter your message"
            required
          ></textarea>
          <button type="submit" className="btn dark-btn">
            Submit Now <img src={whiteArrow} alt="White Arrow" />
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contect;

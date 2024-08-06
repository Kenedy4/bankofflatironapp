import React, { useState } from "react";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      "Thank you for contacting us, we will get in touch as soon as possible"
    );
    // Reset form
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <footer className="footer" id="footer">
      <div className="cardform">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Message:
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="footer-card address">
        <h2>Our Physical Address</h2>
        <p>Flatiron Bank</p>
        <p>Moi Drive-Along Outering Road</p>
        <p>125-00100 Umoja Nairobi</p>
        <p>Email: contact@flatironbank.com</p>
      </div>
      <div className="footer-card social-media">
        <h2>Follow Us and interact with us on:</h2>
        <ul className="social-media-list">
          <li>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noreferrer"
              className="fab fa-facebook"
            >
              Facebook
            </a>
          </li>
          <li>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noreferrer"
              className="fab fa-twitter"
            >
              X
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
              className="fab fa-instagram"
            >
              Instagram
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="fab fa-linkedin"
            >
              LinkedIn
            </a>
          </li>
        </ul>
        <p>&copy; 2024: Kipawa Designs: Phone: +25417215525</p>
      </div>
    </footer>
  );
};

export default Footer;

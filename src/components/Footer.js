import React from "react";
// import "./Footer.css"; // Assuming you have this file for styling

const Footer = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      "Thank you for contacting us, we will get in touch as soon as possible"
    );
  };

  return (
    <footer className="footer">
      <div className="footer-card contact-me">
        <h2>Contact Us Form</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" name="name" required />
          </label>
          <label>
            Email:
            <input type="email" name="email" required />
          </label>
          <label>
            Message:
            <textarea name="message" required></textarea>
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="footer-card contact-form">
        <h2>Our Physical Address</h2>
        <p>Flatiron Bank</p>
        <p>Moi Drive-Along Outering Road</p>
        <p>125-00100 Umoja Nairobi</p>
        <p>Email: contact@flatironbank.com</p>
      </div>
      <div className="footer-card social-media">
        <h2>Follow Us and interact with us on:</h2> <br />
        <ul className="social-media-icons">
          <li>
            <a
              href="https://www.facebook.com"
              target="noreferrer"
              class="fab fa-facebook"
            >
              Facebook
            </a>
          </li>
          <li>
            <a
              href="https://www.twitter.com"
              target="noreferrer"
              class="fab fa-twitter"
            >
              X
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com"
              target="noreferrer"
              class="fab fa-instagram"
            >
              Instagram
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com"
              target="noreferrer"
              class="fab fa-linkedin"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

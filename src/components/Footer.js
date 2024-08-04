import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section contact-me">
        <h2>Contact US Form</h2>
        <form>
          <label>
            Name:
            <input type="text" name="name" />
          </label>
          <label>
            Email:
            <input type="email" name="email" />
          </label>
          <label>
            Message:
            <textarea name="message"></textarea>
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="footer-section contact-form">
        <h2>Our Pysicical Adddress</h2>
        <p>Flatiron Bank</p>
        <p>Moi Drive-Along Outering Road</p>
        <p>125-00100 Umoja Nairobi</p>
        <p>Email: contact@flatironbank.com</p>
      </div>
      <div className="footer-section social-media">
        <h2>Follow Us and interact with us on:</h2> <br />
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Facebook
        </a>
        &nbsp;&nbsp;
        <a
          href="https://www.twitter.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </a>
        &nbsp;&nbsp;
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
        &nbsp;&nbsp;
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
};

export default Footer;

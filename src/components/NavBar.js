import React from "react";

const Navbar = ({ setNavbar }) => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about-us">About Us</a>
        </li>
        <li>
          <a href="#contact-us">Contact Us</a>
        </li>
      </ul>
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
      </div>
    </nav>
  );
};

export default Navbar;

import React from "react";

const Navbar = ({ setNavbar }) => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#home">About Us</a>
        </li>
        <li>
          <a href="#footer">Contact Us</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

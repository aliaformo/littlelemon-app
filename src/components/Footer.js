import React from "react";
import "./styles/Footer.css";
import Restaurant from "../assets/Restaurant.jpg";

const Footer = () => {
  return (
    <footer>
        <img
          src={Restaurant}
          alt="restaurant terrace"
        />
        <nav>
        <h3>Doormat <br/> Navigation</h3>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Menu</li>
          <li>Reservations</li>
          <li>Order Online</li>
          <li>Login</li>
        </ul>
      </nav>
      <nav>
        <h3>Contact</h3>
        <ul>
          <li>Address</li>
          <li>phone number</li>
          <li>email</li>
        </ul>
      </nav>
      <nav>
        <h3>Social Media Links</h3>
        <ul>
          <li>Facebook</li>
          <li>Instagram</li>
          <li>Twitter</li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
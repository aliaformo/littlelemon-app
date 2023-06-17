import { Link } from "react-router-dom";
import React from "react";
import "./styles/Nav.css";
import styled from "styled-components";



const linkStyle = {
   textDecoration: "none",
  color: "black",
  fontWeight: "400",
  
};

function Nav() {

    return (
        <>

<nav className="Nav-bar">
<ul>
        <li>
          <Link to="/" style={linkStyle}>  Home</Link>
        </li>
        <li>
          <a href="#about" style={linkStyle}>About</a>
        </li>
        <li>
          <a href="#menu" style={linkStyle}>Menu</a>
        </li>
        <li>
          <Link to="/booking" style={linkStyle}>Reservations</Link>
        </li>
        <li>
          <a href="#order-online" style={linkStyle}>Order Online</a>
        </li>
        <li>
          <a href="#login" style={linkStyle}>Login</a>
        </li>
      </ul>
</nav>
</>
)

}

export default Nav;
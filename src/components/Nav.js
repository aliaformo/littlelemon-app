import { Link } from "react-router-dom";
import React from "react";
import "./styles/Nav.css";

function Nav() {

    return (
        <>

<nav className="Nav-bar">
<ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#menu">Menu</a>
        </li>
        <li>
          <Link to="/booking">Reservations</Link>
        </li>
        <li>
          <a href="#order-online">Order Online</a>
        </li>
        <li>
          <a href="#login">Login</a>
        </li>
      </ul>
</nav>
</>
)

}

export default Nav;
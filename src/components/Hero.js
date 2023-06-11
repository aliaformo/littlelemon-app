import React from "react";
import { Link } from "react-router-dom";
import Restaurantfood from "../assets/Restaurantfood.jpg";
import "./styles/Hero.css";


function Hero() {
    return (
        <section className="hero-container">
        <article className="left-side">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          We are a family owned <br/> Mediterranean restaurant,<br/>  focused on traditional<br/> 
          recipes served with a modern<br/>  twist.
        </p>
        <button id="button">
          <Link to="/BookingForm">Reserve a Table</Link>
        </button>
      </article>
      <article className="right-side">
        <img
          src={Restaurantfood}
          alt="cook holding a tablet with bruchettas"
        />
      </article>
        </section>
    )
}

export default Hero;
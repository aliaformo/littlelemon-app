import React from "react";
import { Link } from "react-router-dom";
import Restaurantfood from "../assets/Restaurantfood.jpg";
import "./styles/Hero.css";
import { useNavigate } from "react-router-dom";


function Hero() {
  const navigate = useNavigate();
    return (
        <section className="hero-container">
        <article className="left-side">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          We are a family owned <br/> Mediterranean restaurant,<br/>  focused on traditional<br/> 
          recipes served with a modern<br/>  twist.
        </p>
        <button id="button" onClick={() => {
                  navigate("/Booking");
                }}>
          Reserve a Table
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
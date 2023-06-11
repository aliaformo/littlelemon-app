import React from "react";
import RestImage from "../assets/RestImage.png";
import "./styles/Chicago.css";

function Chicago() {
    return (
        <>
        <section className="chicago-container">
            <article className="text-container">
            <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean blandit luctus aliquam. Sed commodo augue consequat bibendum iaculis. Aenean non interdum ex. Donec rutrum nibh sit amet. <br/>
        Velit scelerisque gravida. Donec in lacinia enim, sed laoreet dui. Praesent ac massa quis purus tempus imperdiet.
        </p>

            </article>
            <article className="img-container">
            <img
          src={RestImage}
          alt="cooks of the restaurant"
        />

            </article>

        </section>
        </>
    )
}

export default Chicago;
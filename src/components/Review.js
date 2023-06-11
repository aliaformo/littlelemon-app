import React from "react";
import "./styles/Review.css";
import Stars from "../assets/Stars.png";

const Review = ({image, names, content}) => {
    return (
        <>
        <section className="review-container">
            <img width="85em" src={Stars} alt="rating"/>
            <article className="img-name">
            <img width="47em" src={image} alt="a person who left review" />
            <h3>{names}</h3>
            </article>
            <article className="review-text">
            <p>{content}</p>

            </article>

        </section>
        </>
    );
};

export default Review;
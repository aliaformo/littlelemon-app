import Review from "./Review";
import React from "react";
// import Stars from "../assets/Stars.png";
import Gay1 from "../assets/Gay1.png";
import Gay2 from "../assets/Gay2.png";
import Woman1 from "../assets/Woman1.png";
import Woman2 from "../assets/Woman2.png";
import "./styles/Testimonials.css";


const reviewData = [
    {img: Gay1,
    names: "John Doe",
    content: "Lorem ipsum dolor sit! 👍",
},
    {img: Woman1,
        names: "Jane Done",
        content: "Curabitur id scelerisque!",},
    {img: Gay2,
        names: "Bill Made",
        content: "Aliquam erat volutpat!",},
    {img: Woman2,
        names: "Dawn Day",
        content: "Praesent vel ipsum! 💖",},
];



function Testimonials() {
    const testimonialsCards = reviewData.map((item) => {
        return (
          <Review
            key={item.names}
            image={item.img}
            names={item.names}
            content={item.content}
          />
        );
      });
    
      return (
        <main>
          <section className="testimonials-container">
            <div className="top-specials">
              <h1>Testimonials</h1>
              
            </div>
            <div className="cards">{testimonialsCards}</div>
          </section>
          <br></br>
        </main>
      );
}

export default Testimonials;
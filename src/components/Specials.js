import Card from './Card';
import React from "react";
import GreekSalad from "../assets/GreekSalad.jpg";
import bruschetta from "../assets/Bruchetta.svg";
import LemonDessert from "../assets/LemonDessert.jpg";
import "./styles/Specials.css";




const specialsData = [
    {
      img: GreekSalad,
      title: "Greek Salad",
      price: 12.99,
      description:
        "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    },
    {
      img: bruschetta,
      title: "Bruschetta",
      price: 5.99,
      description:
        "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
    },
    {
      img: LemonDessert,
      title: "Lemon Dessert",
      price: '5.00',
      description:
        "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    },
  ];

function Specials() {
    const specialsCards = specialsData.map((item) => {
        return (
          <Card
            key={item.title}
            image={item.img}
            title={item.title}
            price={item.price}
            description={item.description}
          />
        );
      });
    
      return (
        <main>
          <section className="specials">
            <div className="top-specials">
              <h1>This weeks specials!</h1>
              <button>Online Menu</button>
            </div>
            <div className="cards">{specialsCards}</div>
          </section>
          <br></br>
        </main>
      );
}

export default Specials;
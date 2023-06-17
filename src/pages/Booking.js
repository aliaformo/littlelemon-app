import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { AddIcon, MinusIcon, ReactIcon } from "@chakra-ui/icons";
import moment from "moment";
import Availability from "../components/Availability";
import Form from "../components/Form";
import '../components/styles/Booking.css';
import Restaurant from "../assets/Restaurant.jpg";
import MarioAdrianb from "../assets/MarioAdrianb.jpg";

// booking a table page
export default function Booking() {
  const [available, setAvailable] = React.useState(false);
  const myRef = React.useRef(null);
  // times of reservation
  const [times] = React.useState([
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ]);

  const [seats, setSeats] = React.useState(1);
  const [date, setDate] = React.useState("");
  const [time, setTime] = React.useState("");
  const animation = {
    initial: { scaleX: 0 },
    animate: { scaleX: 1 },
    exit: { scaleX: 0 },
    transition: { duration: 0.5 },
  };
  // function to reduce number of seats needed
  const Reduce = () => {
    if (seats > 1) {
      setSeats(seats - 1);
    }
  };
  // function to increase number of seats needed

  const Increase = () => {
    if (seats < 10) {
      setSeats(seats + 1);
    }
  };
  // function to format the date from the date input field
  const onChangeDate = (date) => {
    const newDate = moment(new Date(date.target.value)).format("YYYY-MM-DD");
    setDate(newDate);
  };
  // auto scroll into form section on mount
  React.useEffect(() => {
    if (available) {
      myRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [available]);

  return (
    // container of reserve a table page
    <div className="booking-container">
      
        <h1>
          Little Lemon
        </h1>
        <h2>
          Chicago
        </h2>
        <h3>
          Find a table for any occasion
        </h3>

        <article className="form-images">
        <img
          src={Restaurant}
          alt="Little lemon terrace"
        />
         <img
          src={MarioAdrianb}
          alt="two cooks smiling"
        />
        </article>

<h4>Number of dinners</h4>
<details>
  <summary>Info</summary>
  <p>To reserve a table for more than 10 people, please call us</p>
</details>

        <article className="booking-buttons">
          <button  onClick={Reduce}>
            <MinusIcon color={"#495e57"} boxSize={"2em"}></MinusIcon>
          </button>
          <h3>
            {seats}
          </h3>
          <button onClick={Increase}>
            <AddIcon color={"#495e57"} boxSize={"2em"}></AddIcon>
          </button>
        </article>


        {/* flex container for the choose date and time input + availability check */}
        <div  ref={myRef}>
          <section className="date-time-container">
            <article>
            
          <label for="res-date">
            <h4>
              Date
            </h4>
          </label>
          <input
            className=""
            type="date"
            onfocus="this.showPicker()"
            id="res-date"
            min={moment().format("YYYY-MM-DD")}
            max="2023-12-31"
            onChange={(e) => onChangeDate(e)}
          ></input>
          </article>
          <article>
          <label for="res-time">
            <h4>
              Time
            </h4>
          </label>
          <select
            onChange={(e) => {
              setTime(e.target.value);
            }}
            id="res-time "
          >
            <option>-Please select a time-</option>
            <option>{times[0]}</option>
            <option>{times[1]}</option>
            <option>{times[2]}</option>
            <option>{times[3]}</option>
            <option>{times[4]}</option>
            <option>{times[5]}</option>
          </select>
          </article>

          </section>


          {/* function that checks if table is available based on seats needed + time + date  */}
          <Availability
            setAvailable={setAvailable}
            available={available}
            date={date}
            seats={seats}
            time={time}
          ></Availability>
        </div>
        {/* form field to input users booking information */}
        <AnimatePresence>
          {available ? (
            <motion.div {...animation}>
              <Form></Form>
            </motion.div>
          ) : null}
        </AnimatePresence>
      
    </div>
  );
}

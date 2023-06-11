// import './App.css';
import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from './components/Nav';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';
// import Booking from "./pages/Booking";
// import BookingConfirmation from "./pages/BookingConfirmation";
// import { useFormContext } from "./store/FormContext";

function App() {

  // const { form } = useFormContext();

  // const formProps = {
  //   name: form.name,
  //   date: form.date,
  //   time: form.time,
  //   guests: form.numberOfGuests,
  //   occasion: form.occasion,
  //   table: form.tablePreference,
  //   request: form.message,
  // };

  return (
    // <BrowserRouter>
    <>
    
    <Home />
    {/* <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/booking" element={<Booking />} />
      <Route
        path="/booking-confirmation"
        element={<Booking />}
      />
    </Routes> */}
   
    </>
  // </BrowserRouter>
    
   
  );
}

export default App;

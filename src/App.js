// import './App.css';
import React from "react";
import Home from './pages/Home';
import Booking from "./pages/Booking";
import { Routes, Route } from "react-router-dom";
import Nav from './components/Nav';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';


function App() {





  return (
    <>
    <div className='top-home'>
    <Header className="Header"/>
    <Nav className="Nav"/>
    </div>
  <Routes>
    <Route path="/" element={<Home />} />
        <Route path="/booking" element={<Booking />} />

    </Routes>
  <Footer className="Footer"/>
  </>
  );
}

export default App;

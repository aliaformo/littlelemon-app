import React from "react";
import Nav from '../components/Nav';
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';
import '../components/styles/Home.css';

function Home() {
  return (
    <div className="home" >
    <div className='top-home'>
    <Header className="Header"/>
    <Nav className="Nav"/>
    </div>
   <Main className="Main"/>
    <Footer className="Footer"/>
    
    </div>
  );
}

export default Home;
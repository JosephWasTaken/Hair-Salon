import React, { useEffect } from "react";
import "../Styles/CSS/index.css";
import Character from "../Assets/Character.png";

// Libraries
import Aos from "aos";
import "aos/dist/aos.css";

// Pages
import Home from "./home";
import Prices from "./prices";
import Stylists from "./stylists";
import Contact from "./contact";
import Footer from "./footer";
import Appointment from "./appointment";
import Navbar from "./navbar";

const Index = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <>
      <Appointment />
      <div id="mainContainer">
        <Navbar />
        <Home />
        <Prices />

        <div data-aos="fade-up" id="circle1"></div>
        <div data-aos="fade-up" id="circle2"></div>
        <div data-aos="fade-up" id="circle3"></div>
        <div data-aos="fade-up" id="circle4"></div>
        <br />
        <div className="line"></div>

        <Stylists />

        <div className="line"></div>
        <img data-aos="fade-up" id="character" src={Character}></img>

        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default Index;

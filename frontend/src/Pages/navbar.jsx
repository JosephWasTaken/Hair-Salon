import React from "react";
import "../Styles/CSS/navbar.css";

const Navbar = () => {
  window.onscroll = function (e) {
    const wrapper = document.getElementById("topwrapper");

    if (window.scrollY >= 950) {
      wrapper.style.top = "0%";
    } else {
      if (window.scrollY <= 950) {
        wrapper.style.top = "-100%";
      }
    }
  };

  const Scroll = (id) => {
    if (window.location.pathname == "/contact") {
      window.location.href = `/${id}`;
      return;
    }
    if (id) {
      document.querySelector(id).scrollIntoView();
    }
  };

  setTimeout(() => {
    let pathName = window.location.pathname;

    if (pathName && pathName != "/contact") {
      Scroll(pathName.slice(1));
    }
  }, 1000);

  return (
    <>
      <div data-aos="fade-down" id="navbar">
        <button className="link" onClick={() => Scroll("#root")}>
          HOME
        </button>
        <button className="link" onClick={() => Scroll("#pricesContainer")}>
          PRICING
        </button>

        <div className="wavyTitle">
          <span id="wave1">T</span>
          <span id="wave2">R</span>
          <span id="wave3">E</span>
          <span id="wave4">S</span>
          <span id="wave5">S</span>
          <span id="wave6">B</span>
          <span id="wave7">L</span>
          <span id="wave8">I</span>
          <span id="wave9">S</span>
          <span id="wave10">S</span>
        </div>

        <button className="link" onClick={() => Scroll("#stylistsContainer")}>
          STYLISTS
        </button>
        <button className="link" onClick={() => Scroll("#contact")}>
          CONTACT
        </button>
      </div>

      <div id="topwrapper">
        <button className="link" onClick={() => Scroll("#root")}>
          HOME
        </button>
        <button className="link" onClick={() => Scroll("#pricesContainer")}>
          PRICING
        </button>
        <button className="link" onClick={() => Scroll("#stylistsContainer")}>
          STYLISTS
        </button>
        <button className="link" onClick={() => Scroll("#contact")}>
          CONTACT
        </button>
      </div>
    </>
  );
};

export default Navbar;

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
      document.getElementById(id).scrollIntoView();
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
        <button className="link" onClick={() => Scroll("root")}>
          HOME
        </button>
        <button className="link" onClick={() => Scroll("pricesContainer")}>
          PRICING
        </button>
        <h1 id="siteName">TRESSBLISS</h1>
        <button className="link" onClick={() => Scroll("prices")}>
          BOOK
        </button>
        <button className="link" onClick={() => Scroll("prices")}>
          CONTACT
        </button>
      </div>

      <div id="topwrapper">
        <button className="link" onClick={() => Scroll("homeContainer")}>
          HOME
        </button>
        <button className="link" onClick={() => Scroll("pricesContainer")}>
          PRICING
        </button>
        <button className="link" onClick={() => Scroll("prices")}>
          BOOK
        </button>
        <button className="link" onClick={() => Scroll("prices")}>
          CONTACT
        </button>
      </div>
    </>
  );
};

export default Navbar;

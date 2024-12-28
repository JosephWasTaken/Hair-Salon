import React, { useEffect } from "react";
import "../Styles/CSS/home.css";

// Components
import Card from "../Components/card";
import Cut from "../Components/cut";

// Images
import MainImage from "../Assets/MainImage.jpeg";
import ManHaircut from "../Assets/Cuts/ManHaircut.jpg";
import WomanHaircut from "../Assets/Cuts/WomanHaircut.jpg";
import KidHaircut from "../Assets/Cuts/KidHaircut.jpg";

import Aos from "aos";
import "aos/dist/aos.css";

import Tilt from "react-parallax-tilt";

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  setTimeout(() => {
    const container = document.getElementById("imageContainer");
    const img = document.getElementById("mainImage");

    container.addEventListener("mousemove", (e) => {
      const x = e.clientX - e.target.offsetLeft;
      const y = e.clientY - e.target.offsetTop;

      if (img.style.transform == "scale(1.6)") {
        img.style.transition = "all 0.25s ease";
      }
      img.style.transformOrigin = `${x}px ${y}px`;
      img.style.transform = "scale(1.6)";
    });

    container.addEventListener("mouseleave", (e) => {
      img.style.transition = "all 0.9s ease";
      img.style.transformOrigin = `center`;
      img.style.transform = "scale(1)";
    });

    const handleOnMouseMove = (e) => {
      const { currentTarget: target } = e;

      const rect = target.getBoundingClientRect(),
        x = e.clientX - rect.left,
        y = e.clientY - rect.top;

      target.style.setProperty("--mouse-x", `${x}px`);
      target.style.setProperty("--mouse-y", `${y}px`);
    };

    for (const card of document.querySelectorAll(".card")) {
      card.onmousemove = (e) => handleOnMouseMove(e);
    }
  }, 2000);

  return (
    <>
      <div id="mainContainer">
        <div data-aos="fade-up" id="homeContainer">
          <div id="imageContainer">
            <div id="gradient"></div>
            <img src={MainImage} id="mainImage" />
          </div>

          <div id="appointmentContainer">
            <div data-aos="fade-right" className="line"></div>
            <Tilt>
              <button
                onClick={() => (window.location.href = "/contact")}
                id="appointment"
              >
                Appointment
              </button>
            </Tilt>
            <div data-aos="fade-left" className="line"></div>
          </div>

          <div id="cards">
            <Card
              title="Exceptional Service"
              info="Our salon is committed to providing an unforgettable experience with personalized attention, friendly staff, and professional care. From the moment you walk in, we make sure you feel valued and leave feeling your best."
              icon="fa-solid fa-bell-concierge"
            />
            <Card
              title="Cheap Prices"
              info="We believe great hair shouldn't break the bank. Enjoy high-quality services at affordable prices, ensuring you get the best value for your money without compromising on results."
              icon="fa-solid fa-money-check-dollar"
            />
            <Card
              title="Premium Products"
              info="We use only the finest, eco-friendly, and top-rated hair care products to ensure your hair receives the best treatment. Experience healthier, shinier hair with every service, tailored to your unique needs."
              icon="fa-solid fa-bottle-droplet"
            />
            <Card
              title="Flexible Hours"
              info="Life is busy, and we understand that. Our extended hours, including evenings and weekends, allow you to easily book an appointment at a time that fits your schedule. Convenience at its best!"
              icon="fa-solid fa-clock"
            />
          </div>
        </div>

        <div data-aos="fade-up" id="circle1"></div>

        <div id="pricesContainer">
          <Cut
            img={ManHaircut}
            title={"Man's Haircut"}
            info={
              "Experience precision and style with our expertly tailored men's haircuts. Whether you prefer a classic look or something modern, we’ll deliver a sharp, clean finish every time."
            }
            price={"29.99$"}
          />
          <Cut
            img={WomanHaircut}
            title={"Woman's Haircut"}
            info={
              "Transform your look with our personalized women's haircuts. From chic and trendy to timeless elegance, our stylists bring your vision to life with attention to every detail."
            }
            price={"59.99$"}
          />
          <Cut
            img={KidHaircut}
            title={"Kid's Haircut"}
            info={
              "Make haircut day fun and stress-free! Our kid-friendly stylists create adorable and neat styles for little ones, ensuring comfort and smiles all around."
            }
            price={"24.99$"}
          />
        </div>

        <div data-aos="fade-up" id="circle2"></div>

        <div data-aos="fade-right" className="line"></div>

        <div id="boxes">
          <div className="box">
            <div className="layer"></div>
            <div className="layer"></div>
            <div className="layer"></div>

            <div id="mainLayer" className="layer">
              <h1>Contact Us</h1>

              <span className="large-input">
                <span className="small-input">
                  <label htmlFor="firstName">First Name</label>
                  <input type="text" name="firstName" />
                </span>
                <span className="small-input">
                  <label htmlFor="secondName">Second Name</label>
                  <input type="text" name="secondName" />
                </span>
              </span>

              <span className="large-input">
                <label htmlFor="phone">Phone Number</label>
                <input type="phone" name="phone" />
              </span>

              <span className="large-input">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" />
              </span>

              <button id="submit" type="submit">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

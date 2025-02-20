import React from "react";
import Tilt from "react-parallax-tilt";
import Card from "../Components/card";
import MainImage from "../Assets/MainImage.jpeg";

const handleOnMouseMove = (e) => {
  const { currentTarget: target } = e;

  const rect = target.getBoundingClientRect(),
    x = e.clientX - rect.left,
    y = e.clientY - rect.top;

  target.style.setProperty("--mouse-x", `${x}px`);
  target.style.setProperty("--mouse-y", `${y}px`);
};

const imageEffect = () => {
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

  for (const card of document.querySelectorAll(".card")) {
    card.onmousemove = (e) => handleOnMouseMove(e);
  }
};

const openAppointment = () => {
  document.querySelector(".appointment").style.right = "0%";
};

const Home = () => {
  setTimeout(() => {
    imageEffect();
  }, 2000);

  return (
    <div data-aos="fade-up" id="homeContainer">
      <div id="imageContainer">
        <div id="gradient"></div>
        <img src={MainImage} id="mainImage" />
      </div>

      <div id="appointmentContainer">
        <div data-aos="fade-right" className="line"></div>
        <Tilt>
          <button onClick={() => openAppointment()} id="appointment-btn">
            Appointment
          </button>
        </Tilt>
        <div data-aos="fade-left" className="line"></div>
      </div>

      <div id="cards">
        <Card
          title="Exceptional Service"
          info="Our salon is committed to providing an unforgettable experience with personalized attention, friendly staff, and professional care. From the moment you walk in, we make sure you feel valued and leave feeling your best."
          icon="fa-solid fa-bell-concierge card-icon"
        />
        <Card
          title="Cheap Prices"
          info="We believe great hair shouldn't break the bank. Enjoy high-quality services at affordable prices, ensuring you get the best value for your money without compromising on results."
          icon="fa-solid fa-money-check-dollar card-icon"
        />
        <Card
          title="Premium Products"
          info="We use only the finest, eco-friendly, and top-rated hair care products to ensure your hair receives the best treatment. Experience healthier, shinier hair with every service, tailored to your unique needs."
          icon="fa-solid fa-bottle-droplet card-icon"
        />
        <Card
          title="Flexible Hours"
          info="Life is busy, and we understand that. Our extended hours, including evenings and weekends, allow you to easily book an appointment at a time that fits your schedule. Convenience at its best!"
          icon="fa-solid fa-clock card-icon"
        />
      </div>
    </div>
  );
};

export default Home;

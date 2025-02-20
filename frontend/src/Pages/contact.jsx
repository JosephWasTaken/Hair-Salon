import React, { useRef } from "react";
import Input from "../Components/input";
import Envelope from "../Assets/Envelope.png";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  let correct = [false, false, false, false, false];

  function Validate(element, label) {
    let pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

    if (
      label == "Message" &&
      element.value.length >= 5 &&
      element.value.length <= 100
    ) {
      element.style.outline = "2px solid green";
      correct[5] = true;
    } else {
      element.style.outline = "2px solid red";
      correct[5] = false;
    }

    if (element.type == "text" && label != "Message") {
      if (element.value.length > 2 && element.value.length < 16) {
        element.style.outline = "2px solid green";

        if (label == "First Name") correct[1] = true;
        if (label == "Second Name") correct[2] = true;
      } else {
        element.style.outline = "2px solid red";

        if (label == "First Name") correct[1] = false;
        if (label == "Second Name") correct[2] = false;
      }
    }
    //
    else if (element.type == "email") {
      if (element.value.match(pattern)) {
        element.style.outline = "2px solid green";
        correct[3] = true;
      } else {
        element.style.outline = "2px solid red";
        correct[3] = false;
      }
    }
    //
    else if (element.type == "tel") {
      if (element.value && element.value.match(/\d/g).length == 10) {
        element.style.outline = "2px solid green";
        correct[4] = true;
      } else {
        element.style.outline = "2px solid red";
        correct[4] = false;
      }
    }

    setTimeout(() => {
      if (element.style.outline == "red solid 2px") {
        element.style.outline = "transparent solid 2px";
      }
    }, 2000);
  }

  function Reset(e) {
    let verify = 0;

    correct.forEach((element) => {
      if (element == true) {
        verify++;
      }
    });

    e.preventDefault();
    if (verify == 5) {
      emailjs.sendForm(
        "service_nk3pi9o",
        "template_np9vj3d",
        form.current,
        "BcLOQAwoYCN9OMmJE"
      );

      document.querySelectorAll(".smallinput").forEach((element) => {
        element.value = "";
        element.style.outline = "none";
      });

      document.querySelector(".envelope").id = "envelope-animation";

      setTimeout(() => {
        document.querySelector(".envelope").id = "";
      }, 3000);
    } else {
      document.querySelectorAll(".smallinput").forEach((element) => {
        Validate(element, element.parentNode.firstChild);
      });
    }
  }

  return (
    <>
      <img className="envelope" src={Envelope}></img>
      <div className="box">
        <div className="layer"></div>
        <div className="layer"></div>
        <div className="layer"></div>

        <form id="contact" className="layer" ref={form} onSubmit={Reset}>
          <h1>Contact Us</h1>
          <span className="double-input">
            <Input type="text" name="First Name" Validate={Validate} />
            <Input type="text" name="Second Name" Validate={Validate} />
          </span>

          <Input type="tel" name="Phone Number" Validate={Validate} />
          <Input type="email" name="Email" Validate={Validate} />
          <Input type="text" name="Message" Validate={Validate} />

          <button type="submit">Submit</button>
        </form>
      </div>

      <div id="mapContainer">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2733.1111341312753!2d23.574042076873717!3d46.76270584586998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47490e873378e0cd%3A0xc8ab85a08da5884f!2sSalon%20Alisa!5e0!3m2!1sro!2sro!4v1735561652361!5m2!1sro!2sro"
          width="600"
          height="450"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          id="map"
        ></iframe>
        <div id="mapData">
          <h1>You can find us here!</h1>

          <div id="info">
            <h2>Strada Bogdan Petriceicu Hasdeu</h2>
            <h2>Nr.82 Cluj-Napoca 400371</h2>
            <h2>✉️ TressBlissDesk@gmail.com</h2>
            <h2>📞 +40 749 125 812</h2>

            <h3>⏰ Monday - Thursday - 10am to 8pm</h3>
            <h2>Friday - Saturday - 9am to 5pm</h2>
            <h3>! By Appointment Only !</h3>
            <h2>❤️ Your hair deserves the best!</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

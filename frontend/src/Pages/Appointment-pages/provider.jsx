import React from "react";
import TopBar from "../../Components/Appointment/top-bar";
import Rosa from "../../Assets/Stylists/Rosa.jpg";
import Jack from "../../Assets/Stylists/Jack.jpg";
import Arthur from "../../Assets/Stylists/Arthur.jpg";
import Bella from "../../Assets/Stylists/Bella.jpg";
import Ben from "../../Assets/Stylists/Ben.jpg";
import Rane from "../../Assets/Stylists/Rane.jpg";
import James from "../../Assets/Stylists/James.jpg";
import Leonard from "../../Assets/Stylists/Leonard.jpg";
import Charlot from "../../Assets/Stylists/Charlot.jpg";

const Provider = ({ setActiveTab, setProvider, service }) => {
  function move(text) {
    setActiveTab((prevState) => prevState + 1);
    setProvider(text);
  }
  function change() {
    setActiveTab((prevState) => prevState - 1);
  }

  return (
    <>
      <div className="appointment opened">
        <TopBar marker1={true} marker2={true} />
        <h1 className="service-select">- Select Stylist -</h1>
        <div className="service-current">
          <h1>{service}</h1>
          <h2 onClick={change}>Change Service</h2>
        </div>

        <div id="content">
          <div className="stylist" onClick={() => move("Rosa")}>
            <img src={Rosa} />
            <span>
              <h1>Rosa</h1>
              <i className="fa-solid fa-chevron-right"></i>
            </span>
          </div>

          <div className="stylist" onClick={() => move("Jack")}>
            <img src={Jack} />
            <span>
              <h1>Jack</h1>
              <i className="fa-solid fa-chevron-right"></i>
            </span>
          </div>

          <div className="stylist" onClick={() => move("Arthur")}>
            <img src={Arthur} />
            <span>
              <h1>Arthur</h1>
              <i className="fa-solid fa-chevron-right"></i>
            </span>
          </div>

          <div className="stylist" onClick={() => move("Bella")}>
            <img src={Bella} />
            <span>
              <h1>Bella</h1>
              <i className="fa-solid fa-chevron-right"></i>
            </span>
          </div>

          <div className="stylist" onClick={() => move("Ben")}>
            <img src={Ben} />
            <span>
              <h1>Ben</h1>
              <i className="fa-solid fa-chevron-right"></i>
            </span>
          </div>

          <div className="stylist" onClick={() => move("Rane")}>
            <img src={Rane} />
            <span>
              <h1>Rane</h1>
              <i className="fa-solid fa-chevron-right"></i>
            </span>
          </div>

          <div className="stylist" onClick={() => move("James")}>
            <img src={James} />
            <span>
              <h1>James</h1>
              <i className="fa-solid fa-chevron-right"></i>
            </span>
          </div>

          <div className="stylist" onClick={() => move("Leonard")}>
            <img src={Leonard} />
            <span>
              <h1>Leonard</h1>
              <i className="fa-solid fa-chevron-right"></i>
            </span>
          </div>

          <div className="stylist" onClick={() => move("Charlot")}>
            <img src={Charlot} />
            <span>
              <h1>Charlot</h1>
              <i className="fa-solid fa-chevron-right"></i>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Provider;

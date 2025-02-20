import React from "react";
import Marker from "../../Components/Appointment/marker.jsx";

const closeAppointment = () => {
  document.querySelector(".appointment").style.right = "-45%";
};

const TopBar = ({ marker1, marker2, marker3, marker4 }) => {
  return (
    <>
      <div id="top-bar">
        <button id="close" onClick={closeAppointment}>
          X Close
        </button>

        <span className="progress">
          <Marker number="1" service="Service" active={marker1} />
          <Marker number="2" service="Provider" active={marker2} />
          <Marker number="3" service="Date" active={marker3} />
          <Marker number="4" service="Payment" active={marker4} />
        </span>
      </div>
    </>
  );
};

export default TopBar;

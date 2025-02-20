import TopBar from "../../Components/Appointment/top-bar";
import React from "react";
import axios from "axios";

const Payment = ({ setActiveTab, service, provider, date, cost, hour }) => {
  function change() {
    setActiveTab((prevState) => prevState - 1);
  }

  const buy = async () => {
    axios
      .post("http://localhost:5000/payment", {
        service: service,
        cost: Math.round(cost * 100),
        date: date.slice(4),
        hour: hour,
      })
      .then((response) => {
        window.location.href = response.data.url;
      })
      .catch((error) => console.error("Error:", error.response));
  };

  return (
    <div className="appointment opened">
      <TopBar marker1={true} marker2={true} marker3={true} marker4={true} />
      <h1 className="service-select">- Confirmation -</h1>
      <div className="service-current">
        <div>
          <img src={`/src/Assets/Stylists/${provider}.jpg`} />
          <h1>
            {date}, {service}
          </h1>
        </div>
        <h2 onClick={change}>Change Date</h2>
      </div>

      <div id="content">
        <h1 id="policy">
          All prices listed on our website are final. Purchases are
          non-refundable. We do not offer returns, exchanges, or price
          adjustments after a purchase has been completed. By making a purchase,
          you agree to these terms. If you have any questions, please contact
          our support team before completing your order.
        </h1>
        <button onClick={buy} id="buy-button">
          PURCHASE
        </button>
      </div>
    </div>
  );
};

export default Payment;

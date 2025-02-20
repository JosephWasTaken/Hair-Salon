import React, { useState } from "react";
import Service from "./Appointment-pages/service.jsx";
import Provider from "./Appointment-pages/provider.jsx";
import Date from "./Appointment-pages/date.jsx";
import Payment from "./Appointment-pages/payment.jsx";

export default function Appointment() {
  const [activeTab, setActiveTab] = useState(0);
  const [service, setService] = useState(0);
  const [provider, setProvider] = useState(0);
  const [date, setDate] = useState(0);
  const [hour, setHour] = useState(0);
  const [cost, setCost] = useState(0);

  function renderActiveComponent() {
    switch (activeTab) {
      case 0:
        return (
          <Service
            setActiveTab={setActiveTab}
            setService={setService}
            setCost={setCost}
            service={service}
          />
        );
      case 1:
        return (
          <Provider
            setActiveTab={setActiveTab}
            setProvider={setProvider}
            service={service}
          />
        );
      case 2:
        return (
          <>
            <Date
              setActiveTab={setActiveTab}
              service={service}
              provider={provider}
              setDate={setDate}
              setHour={setHour}
            />
          </>
        );
      case 3:
        return (
          <>
            <Payment
              setActiveTab={setActiveTab}
              service={service}
              provider={provider}
              date={date}
              cost={cost}
              hour={hour}
            />
          </>
        );
    }
  }

  return <>{renderActiveComponent()}</>;
}

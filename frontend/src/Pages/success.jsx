import React from "react";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import emailjs from "@emailjs/browser";

const Success = () => {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const [verified, setVerified] = useState(false);
  const [date, setDate] = useState("");
  const [hour, setHour] = useState("");

  useEffect(() => {
    if (sessionId) {
      fetch(`http://localhost:5000/verify-payment?session_id=${sessionId}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            setVerified(true);
            setDate(data.date);
            setHour(data.hour);
          }
        })
        .catch((error) => console.error("Verification failed:", error));
    }
  }, [sessionId]);

  if (!sessionId) {
    return <h1>Invalid session</h1>;
  }

  if (date) {
    axios
      .post("http://localhost:5000/create", {
        day: date,
        hour: hour,
      })
      .catch((error) => console.error("Error:", error.response));

    let templateParams = {
      date: date,
      hour: hour,
    };

    emailjs.send(
      "service_nk3pi9o",
      "template_4w86i5v",
      templateParams,
      "BcLOQAwoYCN9OMmJE"
    );

    setTimeout(() => {
      window.location.href = "/";
    }, 1500);
  }

  return (
    <div>
      {verified ? (
        <>
          <h1>Payment Successful! 🎉</h1>
          <p>Your booking date: {date}</p>{" "}
        </>
      ) : (
        <h1>Verifying payment...</h1>
      )}
    </div>
  );
};

export default Success;

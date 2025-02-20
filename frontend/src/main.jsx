import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  "pk_test_51QgsuACom5u3vg5074MTOH2CWjbYNZnBsnW5bYkBLuPKNcwCyyY3WDmHHrLEw6oyBAGXPncRKWWiVs5DLTavbnMY00eDcZ6xif"
);

import Index from "./Pages/index.jsx";
import Success from "./Pages/success.jsx";

function Main() {
  return (
    <Elements stripe={stripePromise}>
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </Router>
    </Elements>
  );
}

let container = null;

if (container == null) {
  container = "Container";
  ReactDOM.createRoot(document.getElementById("root")).render(<Main />);
}

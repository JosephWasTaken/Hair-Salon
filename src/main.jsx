import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Pages/home.jsx";
import Contact from "./Pages/contact.jsx";
import Navbar from "./Pages/navbar.jsx";

function Main() {
  return (
    <React.StrictMode>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </React.StrictMode>
  );
}

let container = null;

if (container == null) {
  container = "as";
  ReactDOM.createRoot(document.getElementById("root")).render(<Main />);
}

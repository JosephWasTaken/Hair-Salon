import React from "react";

const card = ({ title, info, icon }) => {
  return (
    <div data-aos="flip-left" className="card">
      <h1 className="card-title">{title}</h1>
      <br />
      <p className="card-info">{info}</p>
      <i className={icon}></i>
    </div>
  );
};

export default card;

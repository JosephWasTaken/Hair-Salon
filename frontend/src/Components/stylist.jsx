import React from "react";

const stylist = ({ image, name, description }) => {
  return (
    <div class="stylist-box">
      <img src={image} />
      <h1>{name}</h1>
      <p>{description}</p>
    </div>
  );
};

export default stylist;

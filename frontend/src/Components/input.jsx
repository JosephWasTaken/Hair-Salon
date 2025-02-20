import React from "react";

const input = ({ type, name, Validate }) => {
  setTimeout(() => {
    document.querySelectorAll(".smallinput").forEach((element) => {
      element.addEventListener("input", () =>
        Validate(element, element.parentNode.firstChild.textContent)
      );
    });
  }, 100);

  return (
    <span className="input">
      <label htmlFor={name}>{name}</label>
      <br />
      <input className="smallinput" type={type} name={name} />
    </span>
  );
};

export default input;

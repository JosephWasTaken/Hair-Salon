import React from "react";
import ManHaircut from "../Assets/Cuts/ManHaircut.jpg";
import WomanHaircut from "../Assets/Cuts/WomanHaircut.jpg";
import KidHaircut from "../Assets/Cuts/KidHaircut.jpg";
import Cut from "../Components/cut";

const Prices = () => {
  return (
    <div id="pricesContainer">
      <Cut
        img={ManHaircut}
        title={"Man's Haircut"}
        info={
          "Experience precision and style with our expertly tailored men's haircuts. Whether you prefer a classic look or something modern, we’ll deliver a sharp, clean finish every time."
        }
        price={"29.99$"}
      />
      <Cut
        img={WomanHaircut}
        title={"Woman's Haircut"}
        info={
          "Transform your look with our personalized women's haircuts. From chic and trendy to timeless elegance, our stylists bring your vision to life with attention to every detail."
        }
        price={"59.99$"}
      />
      <Cut
        img={KidHaircut}
        title={"Kid's Haircut"}
        info={
          "Make haircut day fun and stress-free! Our kid-friendly stylists create adorable and neat styles for little ones, ensuring comfort and smiles all around."
        }
        price={"24.99$"}
      />
    </div>
  );
};

export default Prices;

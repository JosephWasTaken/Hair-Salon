import React from "react";
import Stylist from "../Components/stylist";
import Rosa from "../Assets/Stylists/Rosa.jpg";
import Jack from "../Assets/Stylists/Jack.jpg";
import Arthur from "../Assets/Stylists/Arthur.jpg";
import Bella from "../Assets/Stylists/Bella.jpg";
import Ben from "../Assets/Stylists/Ben.jpg";
import Rane from "../Assets/Stylists/Rane.jpg";
import James from "../Assets/Stylists/James.jpg";
import Leonard from "../Assets/Stylists/Leonard.jpg";
import Charlot from "../Assets/Stylists/Charlot.jpg";

const Stylists = () => {
  return (
    <div id="stylistsContainer">
      <Stylist
        image={Rosa}
        name={"Rosa"}
        description={
          "A master of color transformations, Rosa specializes in bold hues and natural blends that bring out your personality."
        }
      />

      <Stylist
        image={Jack}
        name={"Jack"}
        description={
          "The go-to stylist for precision cuts and sleek styles, Jack crafts looks that are both timeless and modern."
        }
      />

      <Stylist
        image={Arthur}
        name={"Arthur"}
        description={
          "A true artist in men’s grooming, Arthur is known for sharp fades, classic barbering, and effortless styling."
        }
      />

      <Stylist
        image={Bella}
        name={"Bella"}
        description={
          "With an eye for elegance, Bella excels in voluminous blowouts and glamorous updos for any occasion."
        }
      />

      <Stylist
        image={Rane}
        name={"Rane"}
        description={
          "A curl specialist who embraces texture, Rane helps define, shape, and care for waves, curls, and coils."
        }
      />

      <Stylist
        image={Ben}
        name={"Ben"}
        description={
          "An expert in effortless, low-maintenance styles, Ben makes sure your hair looks stunning every day."
        }
      />

      <Stylist
        image={James}
        name={"James"}
        description={
          "Passionate about hair health, James focuses on treatments, deep conditioning, and customized scalp care."
        }
      />

      <Stylist
        image={Leonard}
        name={"Leonard"}
        description={
          "A trendsetter in fashion-forward cuts, Leonard always stays ahead with innovative techniques and styles."
        }
      />

      <Stylist
        image={Charlot}
        name={"Charlot"}
        description={
          "The salon’s styling perfectionist, Charlot ensures every look is polished, refined, and red-carpet ready."
        }
      />
    </div>
  );
};

export default Stylists;

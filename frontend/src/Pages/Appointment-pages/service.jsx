import React from "react";
import TopBar from "../../Components/Appointment/top-bar";

const Search = (e) => {
  const value = e.target.value.toLowerCase();

  document.querySelectorAll(".service").forEach((div) => {
    if (!div.firstChild.textContent.toLowerCase().includes(value)) {
      div.style.display = "none";
    } else {
      div.style.display = "block";
    }
  });
};

const Service = ({ setActiveTab, setService, setCost, service }) => {
  function move(text, cost) {
    setCost(cost);
    setActiveTab((prevState) => prevState + 1);
    setService(text);
  }

  if (service) {
    setTimeout(() => {
      document.querySelector(".appointment").classList.add("opened");
    }, 100);
  }

  return (
    <>
      <div className="appointment">
        <TopBar marker1={true} />
        <h1 className="service-select">- Select Service -</h1>

        <div id="search-bar">
          <i className="fas fa-search"></i>
          <input
            type="text"
            id="search"
            placeholder="Search for a service"
            onInput={(e) => Search(e)}
          ></input>
        </div>

        <div id="content">
          <div className="service" onClick={() => move("Men's Haircut", 29.99)}>
            <h1>Men's Haircut</h1>
            <p>
              Style your hair in a new and fabulous way with the help of our
              experienced stylists specializing in men's grooming.
            </p>
            <h2>29.99$</h2>
          </div>

          <div
            className="service"
            onClick={() => move("Women's Haircut", 59.99)}
          >
            <h1>Women's Haircut</h1>
            <p>
              Transform your look with a precision cut tailored to your face
              shape, hair type, and personal style.
            </p>
            <h2>59.99$</h2>
          </div>

          <div className="service" onClick={() => move("Kid's Haircut", 24.99)}>
            <h1>Kid's Haircut</h1>
            <p>
              Fun and friendly haircuts for little ones, with stylists who make
              the experience enjoyable and stress-free for children.
            </p>
            <h2>24.99$</h2>
          </div>

          <div className="service" onClick={() => move("Hair Coloring", 64.99)}>
            <h1>Hair Coloring</h1>
            <p>
              From subtle highlights to bold, vivid hues, our color specialists
              bring your hair dreams to life with vibrant, lasting results.
            </p>
            <h2>64.99$</h2>
          </div>

          <div
            className="service"
            onClick={() => move("Blow-dry & Styling", 39.99)}
          >
            <h1>Blow-Dry & Styling</h1>
            <p>
              Achieve a salon-perfect finish with a professional blowout and
              styling for any occasion, from sleek and smooth to voluminous
              waves.
            </p>
            <h2>39.99$</h2>
          </div>

          <div
            className="service"
            onClick={() => move("Keratin Treatments", 89.99)}
          >
            <h1>Keratin Treatments</h1>
            <p>
              Smooth and strengthen your hair with our keratin treatments,
              reducing frizz and enhancing shine for weeks.
            </p>
            <h2>89.99$</h2>
          </div>

          <div className="service" onClick={() => move("Balayage", 49.99)}>
            <h1>Balayage</h1>
            <p>
              Get a sun-kissed, natural look with balayage, a hand-painted
              highlighting technique customized to your hair.
            </p>
            <h2>49.99$</h2>
          </div>

          <div
            className="service"
            onClick={() => move("Scalp Treatments", 94.99)}
          >
            <h1>Scalp Treatments</h1>
            <p>
              Nourish and revitalize your scalp with a targeted treatment to
              promote healthy hair growth and manage conditions like dryness or
              dandruff.
            </p>
            <h2>94.99$</h2>
          </div>

          <div
            className="service"
            onClick={() => move("Hair Extensions", 124.99)}
          >
            <h1>Hair Extensions</h1>
            <p>
              Add length, volume, or both with our premium-quality hair
              extensions, matched seamlessly to your natural hair.
            </p>
            <h2>124.99$</h2>
          </div>

          <div
            className="service"
            onClick={() => move("Ocassion Styling", 99.99)}
          >
            <h1>Occasion Styling</h1>
            <p>
              Turn heads at your next event with a stunning updo, intricate
              braids, or glamorous curls, perfect for weddings, proms, or
              parties.
            </p>
            <h2>99.99$</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;

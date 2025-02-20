import React from "react";
import TopBar from "../../Components/Appointment/top-bar";
import {
  startOfToday,
  format,
  addDays,
  eachDayOfInterval,
  differenceInDays,
  isSunday,
} from "date-fns";

async function getData() {
  const res = await fetch("http://localhost:5000/calendar", {
    method: "GET",
  });
  const data = await res.json();
  let arr = [];

  data.forEach((element) => {
    arr.push(element);
  });

  return arr;
}

function checkBusy() {
  getData().then((res) => {
    res.forEach((object) => {
      document.querySelectorAll(".column").forEach((column) => {
        column.querySelectorAll(".time-button").forEach((btn) => {
          if (
            btn.textContent == object.hour &&
            column.querySelector(".day-date").lastChild.textContent ==
              object.day
          ) {
            btn.classList.add("occupied-button");
          }
        });
      });
    });
  });
}

const Date = ({ setActiveTab, service, provider, setDate, setHour }) => {
  let todayDate = startOfToday();
  let selectedDate = startOfToday();
  let db = false;
  let date1, date2;

  function change() {
    setActiveTab((prevState) => prevState - 1);
  }
  function move(date, hour) {
    setActiveTab((prevState) => prevState + 1);
    setDate(date);
    setHour(hour);
  }

  const formatDate = (today, direction) => {
    if (differenceInDays(todayDate, today) >= 1 || db == true) {
      return;
    }
    db = true;
    selectedDate = today;

    let yearStart = format(today, "yyyy");
    let yearEnd = format(addDays(today, 6), "yyyy");

    date1 = format(today, "MMM") + " " + format(today, "dd") + ", " + yearStart;
    date2 =
      format(addDays(today, 6), "MMM") +
      " " +
      format(addDays(today, 6), "dd") +
      ", " +
      yearEnd;

    document.getElementById("currentDate").textContent = date1 + " - " + date2;
    let columns = document.querySelector("#columns");
    let template = document.querySelector(".template-column");

    let newDays = eachDayOfInterval({
      start: date1,
      end: date2,
    });

    while (columns.lastChild) {
      if (!columns.lastChild.classList.contains("template-column")) {
        columns.lastChild.remove();
      } else {
        break;
      }
    }

    let newTemplate;
    newDays.map((day) => {
      if (isSunday(day)) {
        return;
      }
      newTemplate = template.cloneNode(true);

      if (direction == "right") {
        newTemplate.classList.remove("column-animationl");
        newTemplate.classList.add("column-animationr");
      } else if (direction == "left") {
        newTemplate.classList.remove("column-animationr");
        newTemplate.classList.add("column-animationl");
      }

      newTemplate.firstChild.firstChild.textContent =
        format(day, "EEEE").substring(0, 3) + " ";

      newTemplate.firstChild.lastChild.textContent = format(day, "dd MMM");
      newTemplate.classList.remove("template-column");
      newTemplate.classList.add("column");

      newTemplate.querySelectorAll(".time-button").forEach((element) => {
        element.addEventListener("click", () => {
          if (!element.classList.contains("occupied-button"))
            move(
              element.parentNode.parentNode.firstChild.textContent,
              element.textContent
            );
        });
      });
      columns.appendChild(newTemplate);
    });

    setTimeout(() => {
      checkBusy();
      setTimeout(() => {
        db = false;
      }, 250);
    }, 250);
  };

  setTimeout(() => {
    formatDate(selectedDate, "none");
    document.querySelector("#booking").style.opacity = 1;
  }, 1000);

  return (
    <>
      <div className="appointment opened">
        <TopBar marker1={true} marker2={true} marker3={true} />
        <h1 className="service-select">- Select Date -</h1>
        <div className="service-current">
          <div>
            <img src={`/src/Assets/Stylists/${provider}.jpg`} />
            <h1>
              {service} with {provider}
            </h1>
          </div>
          <h2 onClick={change}>Change Provider</h2>
        </div>

        <div id="content">
          <div id="booking">
            <div id="selector">
              <i
                className="fa-solid fa-circle-chevron-left arrow"
                onClick={() => formatDate(addDays(selectedDate, -7), "left")}
              ></i>
              <span id="currentDateHolder">
                <span id="currentDate"></span>
              </span>
              <i
                className="fa-solid fa-circle-chevron-right arrow"
                onClick={() => formatDate(addDays(selectedDate, 7), "right")}
              ></i>
            </div>

            <div id="columns">
              <div className="template-column">
                <span className="day-date">
                  <p>Thu</p>
                  <p>1 Jan</p>
                </span>

                <span>
                  <button className="time-button">10:00am</button>
                  <button className="time-button">10:30am</button>
                  <button className="time-button">11:00am</button>
                  <button className="time-button">11:30am</button>
                  <button className="time-button">12:00pm</button>
                  <button className="time-button">12:30pm</button>
                  <button className="time-button">13:00pm</button>
                  <button className="time-button">13:30pm</button>
                  <button className="time-button">14:00pm</button>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Date;

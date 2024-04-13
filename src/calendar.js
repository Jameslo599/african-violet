import React, { useEffect, useRef } from "react";
import ArrowRight from "./images/icons/arrow-right";

//Horizontal photo calendar
const Calendar = () => {
  const calendarRef = useRef(null);

  let isDown = false;
  let isMove = false;
  let startX;
  let scrollLeft;

  useEffect(() => {
    bindEventHandler();
  }, []);

  const bindEventHandler = () => {
    calendarRef.current.addEventListener("mousedown", mouseDown);
    calendarRef.current.addEventListener("mouseleave", mouseLeave);
    calendarRef.current.addEventListener("mouseup", mouseUp);
    calendarRef.current.addEventListener("mousemove", mouseMove);
    const items = document.querySelectorAll(".event");
    items.forEach((e) => e.addEventListener("click", jumpTo));
  };
  const mouseDown = (e) => {
    isMove = false;
    isDown = true;
    calendarRef.current.classList.add("active");
    startX = e.pageX - calendarRef.current.offsetLeft;
    scrollLeft = calendarRef.current.scrollLeft;
    setTimeout(() => {
      isMove = true;
    }, 100);
  };
  const mouseLeave = () => {
    isDown = false;
    calendarRef.current.classList.remove("active");
  };
  const mouseUp = () => {
    isDown = false;
    calendarRef.current.classList.remove("active");
  };
  const mouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - calendarRef.current.offsetLeft;
    const walk = x - startX;
    calendarRef.current.scrollLeft = scrollLeft - walk;
  };
  const jumpTo = (e) => {
    if (isMove) return;
    isMove = false;
    calendarRef.current.scrollLeft = e.target.closest("a").offsetLeft - 40;
  };

  return (
    <div id="community" className="nav">
      <div className="calendar-container">
        <div>
          <h2>
            Community Events <ArrowRight />
          </h2>
        </div>
        <div>
          <div className="calendar" ref={calendarRef}>
            <a className="event">
              <div className="calendar-item">
                <figure className="f-3"></figure>
              </div>
              <div className="description">
                <h3>
                  Moonlight African Violet and Gesneriad Society Plant Sale
                </h3>
                <span>
                  Fort Worth Botanical Gardens, 3220 Botanic Garden Blvd., Fort
                  Worth
                </span>
                <span>April 5, 2024, 2 pm - 6 pm</span>
                <span>April 6, 2024, 9 am – 2 pm</span>
              </div>
            </a>
            <a className="event">
              <div className="calendar-item">
                <figure className="f-1"></figure>
              </div>
              <div className="description">
                <h3>AVSA National Convention</h3>
                <span>
                  DoubleTree Phoenix Tempe 2100 S. Priest Dr., Tempe, AZ 85282
                </span>
                <span>April 21 - 28, 2024</span>
                <span className="italic">“Spirit of the Southwest”</span>
              </div>
            </a>
            <a className="event">
              <div className="calendar-item">
                <figure className="f-2"></figure>
              </div>
              <div className="description">
                <h3>
                  Moonlight African Violet and Gesneriad Society Violet Display
                  & Sale
                </h3>
                <span>
                  Fort Worth Botanical Gardens, 3220 Botanic Garden Blvd., Fort
                  Worth
                </span>
                <span>May 4, 2024</span>
                <span>9 am – 4 pm</span>
              </div>
            </a>
            <a className="event">
              <div className="calendar-item">
                <figure className="f-3"></figure>
              </div>
              <div className="description">
                <h3>Summer Workshop</h3>
                <span>
                  First Presbyterian Church 1114 West University, Denton, TX
                </span>
                <span>June 22, 2024</span>
                <span className="italic">Bring a potluck dish to share.</span>
              </div>
            </a>
            <a className="event">
              <div className="calendar-item">
                <figure className="f-1"></figure>
              </div>
              <div className="description">
                <h3>Fall African Violet and Gesneriad Sale</h3>
                <span className="italic">North Haven Gardens</span>
                <span>7700 Northaven Rd., Dallas, TX</span>
                <span>September 20-21, 2024</span>
                <span>9 am - 4 pm</span>
              </div>
            </a>
            <a className="event">
              <div className="calendar-item">
                <figure className="f-2"></figure>
              </div>
              <div className="description">
                <h3>Lone Star African Violet Society Convention</h3>
                <span className="italic">Show and Sale</span>
                <span>
                  DoubleTree by Hilton Hotel 1981 N. Central Expy., Richardson,
                  TX
                </span>
                <span>October 31 - November 2, 2024</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;

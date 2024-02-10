import React, { useEffect, useRef } from "react";
import ArrowRight from "./images/icons/arrow-right";

//Horizontal photo calendar
const Events = () => {
  const eventsRef = useRef(null);

  let isDown = false;
  let isMove = false;
  let startX;
  let scrollLeft;

  useEffect(() => {
    bindEventHandler();
  }, []);

  const bindEventHandler = () => {
    eventsRef.current.addEventListener("mousedown", mouseDown);
    eventsRef.current.addEventListener("mouseleave", mouseLeave);
    eventsRef.current.addEventListener("mouseup", mouseUp);
    eventsRef.current.addEventListener("mousemove", mouseMove);
    const items = document.querySelectorAll(".travel");
    items.forEach((e) => e.addEventListener("click", jumpTo));
  };
  const mouseDown = (e) => {
    isMove = false;
    isDown = true;
    eventsRef.current.classList.add("active");
    startX = e.pageX - eventsRef.current.offsetLeft;
    scrollLeft = eventsRef.current.scrollLeft;
    setTimeout(() => {
      isMove = true;
    }, 100);
  };
  const mouseLeave = () => {
    isDown = false;
    eventsRef.current.classList.remove("active");
  };
  const mouseUp = () => {
    isDown = false;
    eventsRef.current.classList.remove("active");
  };
  const mouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - eventsRef.current.offsetLeft;
    const walk = x - startX;
    eventsRef.current.scrollLeft = scrollLeft - walk;
  };
  const jumpTo = (e) => {
    if (isMove) return;
    isMove = false;
    eventsRef.current.scrollLeft = e.target.closest("a").offsetLeft - 40;
  };

  return (
    <div id="programs" className="nav">
      <div className="calendar-container events-container">
        <div className="events">
          <h2>
            Hosted Programs <ArrowRight />
          </h2>
        </div>
        <div>
          <div className="calendar events event-calendar" ref={eventsRef}>
            <a className="travel">
              <div className="calendar-item">
                <figure className="f-1 events-bg"></figure>
              </div>
              <div className="description">
                <h3>Growing Exceptional Episcias</h3>
                <span>Presented by Dale Martens via Zoom</span>
                <span>February 5, 2024</span>
                <span>Hostesses: Wendy Russell and Stuart Small</span>
              </div>
            </a>
            <a className="travel">
              <div className="calendar-item">
                <figure className="f-2 events-bg"></figure>
              </div>
              <div className="description">
                <h3>Superior Soil</h3>
                <span>Share your soil recipe and soil with members.</span>
                <span>March 18, 2024</span>
                <span>Hostesses: Cindy Branch and David Finley</span>
              </div>
            </a>
            <a className="travel">
              <div className="calendar-item">
                <figure className="f-3 events-bg"></figure>
              </div>
              <div className="description">
                <h3>Those Proper Primulinas</h3>
                <span>Presented by Ron Davidson</span>
                <span>April 15, 2024</span>
                <span>Host/Hostesses: Mike and Thelma Woodruff</span>
              </div>
            </a>
            <a className="travel">
              <div className="calendar-item">
                <figure className="f-3 events-bg"></figure>
              </div>
              <div className="description">
                <h3>Marvelous Minis</h3>
                <span>Presented by Ann Athey</span>
                <span>May 20, 2024</span>
                <span>Host/Hostesses: Mike and Thelma Woodruff</span>
              </div>
            </a>
            <a className="travel">
              <div className="calendar-item">
                <figure className="f-1 events-bg"></figure>
              </div>
              <div className="description">
                <h3>Vacationing Care for Violets</h3>
                <span>Open discussion by membership</span>
                <span>May 20, 2024</span>
                <span>Hostesses: Eileen Hara and Sandy Fass</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;

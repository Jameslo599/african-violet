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
    const container = document.querySelectorAll(".calendar-obs");
    container.forEach((e) => sticky.observe(e));
  }, []);

  const sticky = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (
        entry.isIntersecting &&
        navigator.userAgent.toLowerCase().indexOf("firefox") <= -1
      ) {
        document.querySelector(".slider-parent").classList.add("stuck");
      } else {
        document.querySelector(".slider-parent").classList.remove("stuck");
      }
    });
  });

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
    <div id="programs" className="nav calendar-obs">
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
                <figure className="f-2 events-bg"></figure>
              </div>
              <div className="description">
                <h3>Genetic Drift and Propagation</h3>
                <span>presented by Diane Miller</span>
                <span>September 9, 2024</span>
                <span>Hostesses: Mary Corondan and Suzanne Roberts</span>
              </div>
            </a>
            <a className="travel">
              <div className="calendar-item">
                <figure className="f-3 events-bg"></figure>
              </div>
              <div className="description">
                <h3>The Ten Propers – Violet Basics</h3>
                <span>presented by David Finley</span>
                <span>October 7, 2024</span>
                <span>Host/Hostess: Cynthia Sudul and Karen Wyatt</span>
              </div>
            </a>
            <a className="travel">
              <div className="calendar-item">
                <figure className="f-1 events-bg"></figure>
              </div>
              <div className="description">
                <h3>The Wee Ones</h3>
                <span>presented by Mary Corondan and Sue Li</span>
                <span>November 11, 2024</span>
                <span>Hostesses: Marilin Puig and Suzanne Roberts</span>
              </div>
            </a>
            <a className="travel">
              <div className="calendar-item">
                <figure className="f-2 events-bg"></figure>
              </div>
              <div className="description">
                <h3>Constructing a Dish Garden</h3>
                <span>presented by Suzanne Roberts</span>
                <span>January 13, 2025</span>
                <span>Hostesses: Sue Li and Mary Corondan</span>
              </div>
            </a>
            <a className="travel">
              <div className="calendar-item">
                <figure className="f-3 events-bg"></figure>
              </div>
              <div className="description">
                <h3>What's in Your Fertilizer?</h3>
                <span>presented by Dr. Jeff Smith</span>
                <span>February 10, 2025</span>
                <span>Hostesses: Stuart Small and David Finley</span>
              </div>
            </a>
            <a className="travel">
              <div className="calendar-item">
                <figure className="f-1 events-bg"></figure>
              </div>
              <div className="description">
                <h3>Pests: Meet and Defeat</h3>
                <span>presented by Mary Corondan</span>
                <span>March 10, 2025</span>
                <span>Hostesses: Cindy Branch and Cathy Scheel</span>
              </div>
            </a>
            <a className="travel">
              <div className="calendar-item">
                <figure className="f-2 events-bg"></figure>
              </div>
              <div className="description">
                <h3>Let's Make Violet Babies</h3>
                <span>presented by Diane Miller and Suzanne Roberts</span>
                <span>April 14, 2025</span>
                <span>Host/Hostess: Mike and Thelma Woodruff</span>
              </div>
            </a>
            <a className="travel">
              <div className="calendar-item">
                <figure className="f-3 events-bg"></figure>
              </div>
              <div className="description">
                <h3>Leaf Bingo</h3>
                <span>Members should bring leaves for Bingo prizes.</span>
                <span>May 12, 2025</span>
                <span>Hostesses: Sandy Fass and Diane Miller</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;

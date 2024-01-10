import React, { useEffect, useRef } from "react";

//Horizontal photo calendar
const Calendar = () => {
  const calendarRef = useRef(null);
  const itemsRef = useRef([]);
  //itemsRef.current = document.querySelectorAll(".calendar-item").length;
  //   class Event {
  //     constructor(title, address, date, time) {
  //       this.title = title;
  //       this.address = address;
  //       this.date = date;
  //       this.time = time;
  //     }
  //   }
  //itemsEls.current.splice (index, 1, element)
  let isDown = false;
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
  };
  const mouseDown = (e) => {
    isDown = true;
    calendarRef.current.classList.add("active");
    startX = e.pageX - calendarRef.current.offsetLeft;
    scrollLeft = calendarRef.current.scrollLeft;
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

  return (
    <div className="calendar-container">
      <div className="calendar" ref={calendarRef}>
        <a>
          <div className="calendar-item" ref={itemsRef.current[0]}>
            <h2>Dallas Metro Trio Fall Sale</h2>
            <span>North Haven Gardens, 7700 Northaven Rd., Dallas</span>
            <span>September 22-23, 2023</span>
            <span>9 a.m.-4 p.m.</span>
            <figure></figure>
          </div>
        </a>

        <div className="calendar-item" ref={itemsRef.current[1]}>
          1
        </div>
        <div className="calendar-item" ref={itemsRef.current[2]}>
          1
        </div>
        <div className="calendar-item" ref={itemsRef.current[3]}>
          1
        </div>
        <div className="calendar-item" ref={itemsRef.current[4]}>
          1
        </div>
        <div className="calendar-item" ref={itemsRef.current[5]}>
          1
        </div>
        <div className="calendar-item" ref={itemsRef.current[6]}>
          1
        </div>
      </div>
    </div>
  );
};

export default Calendar;

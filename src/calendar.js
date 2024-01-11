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
      <h2>Upcoming Events</h2>
      <div className="calendar" ref={calendarRef}>
        <a>
          <div className="calendar-item" ref={itemsRef.current[0]}>
            <h3>First African Violet Society of Denton Show & Sale</h3>
            <span>
              First Presbyterian Church, 1114 West University Denton, TX
            </span>
            <span>March 14 - 16, 2024</span>
            <span>“Violets Take Over the World”</span>
            <figure className="f-1"></figure>
          </div>
        </a>
        <a>
          <div className="calendar-item" ref={itemsRef.current[0]}>
            <h3>Dallas Metro AV Societies Spring Sale</h3>
            <span>North Haven Gardens, 7700 Northaven Rd., Dallas</span>
            <span>March 22-23, 2024</span>
            <span>9 am – 4 pm</span>
            <figure className="f-2"></figure>
          </div>
        </a>
        <a>
          <div className="calendar-item" ref={itemsRef.current[0]}>
            <h3>Moonlight African Violet and Gesneriad Society Plant Sale</h3>
            <span>
              Fort Worth Botanical Gardens, 3220 Botanic Garden Blvd., Fort
              Worth
            </span>
            <span>April 5, 2024, 2 pm - 6 pm</span>
            <span>April 6, 2024, 2 am – 2 pm</span>
            <figure className="f-3"></figure>
          </div>
        </a>
        <a>
          <div className="calendar-item" ref={itemsRef.current[0]}>
            <h3>AVSA National Convention</h3>
            <span>
              DoubleTree Phoenix Tempe 2100 S. Priest Dr., Tempe, AZ 85282
            </span>
            <span>April 21 - 28, 2024</span>
            <span>“Spirit of the Southwest”</span>
            <figure className="f-1"></figure>
          </div>
        </a>
        <a>
          <div className="calendar-item" ref={itemsRef.current[0]}>
            <h3>
              Moonlight African Violet and Gesneriad Society Violet Display &
              Sale
            </h3>
            <span>
              Fort Worth Botanical Gardens, 3220 Botanic Garden Blvd., Fort
              Worth
            </span>
            <span>May 4, 2024</span>
            <span>9 am – 4 pm</span>
            <figure className="f-2"></figure>
          </div>
        </a>
        <a>
          <div className="calendar-item" ref={itemsRef.current[0]}>
            <h3>Summer Workshop</h3>
            <span>
              First Presbyterian Church 1114 West University, Denton, TX
            </span>
            <span>June 22, 2024</span>
            <span>Bring a potluck dish to share.</span>
            <figure className="f-3"></figure>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Calendar;

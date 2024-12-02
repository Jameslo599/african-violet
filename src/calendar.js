import React, { useEffect, useRef } from 'react';
import ArrowRight from './images/icons/arrow-right';

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
    calendarRef.current.addEventListener('mousedown', mouseDown);
    calendarRef.current.addEventListener('mouseleave', mouseLeave);
    calendarRef.current.addEventListener('mouseup', mouseUp);
    calendarRef.current.addEventListener('mousemove', mouseMove);
    const items = document.querySelectorAll('.event');
    items.forEach((e) => e.addEventListener('click', jumpTo));
  };
  const mouseDown = (e) => {
    isMove = false;
    isDown = true;
    calendarRef.current.classList.add('active');
    startX = e.pageX - calendarRef.current.offsetLeft;
    scrollLeft = calendarRef.current.scrollLeft;
    setTimeout(() => {
      isMove = true;
    }, 100);
  };
  const mouseLeave = () => {
    isDown = false;
    calendarRef.current.classList.remove('active');
  };
  const mouseUp = () => {
    isDown = false;
    calendarRef.current.classList.remove('active');
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
    calendarRef.current.scrollLeft = e.target.closest('a').offsetLeft - 40;
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
                  First African Violet Society of Denton Show & Sale First
                  Nighter African Violet Society Show
                </h3>
                <span className="italic">Denton Celebrates 50 Years</span>
                <span>
                  First Presbyterian Church, 1114 West University, Denton
                </span>
                <span>March 13 - 15, 2025</span>
              </div>
            </a>
            <a className="event">
              <div className="calendar-item">
                <figure className="f-1"></figure>
              </div>
              <div className="description">
                <h3>Dallas Metro African Violet Society Spring Sale</h3>
                <span className="italic">
                  Demonstrations at 10 am and 2 pm daily
                </span>
                <span>North Haven Gardens, 7700 Northaven Rd., Dallas</span>
                <span>March 21 - 22, 2025, 9 am – 4 pm</span>
              </div>
            </a>
            <a className="event">
              <div className="calendar-item">
                <figure className="f-2"></figure>
              </div>
              <div className="description">
                <h3>AVSA National Convention</h3>
                <span className="italic">Violets are Worlds of Fun</span>
                <span>
                  DoubleTree Kansas City – Overland Park 10100 College Blvd.,
                  Overland Park, KS 66210
                </span>
                <span>May 25 – June 1, 2025</span>
                <span>
                  For more information:{' '}
                  <a
                    className="program-links"
                    href="africanvioletsocietyofamerica.org"
                  >
                    AVSA
                  </a>
                </span>
              </div>
            </a>
            <a className="event">
              <div className="calendar-item">
                <figure className="f-2"></figure>
              </div>
              <div className="description">
                <h3>Summer Workshop</h3>
                <span className="italic">First Presbyterian Church</span>
                <span>1114 West University, Denton</span>
                <span>June 21, 2025, 9 am – 3 pm</span>
                <span>Bring a potluck dish to share.</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;

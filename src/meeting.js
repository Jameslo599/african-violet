import React, { useEffect, useRef } from 'react';

function Meeting() {
  const textRef = useRef(null);

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        document.querySelector('.slider-parent').classList.add('erase');
      } else {
        entry.target.classList.remove('show');
        document.querySelector('.slider-parent').classList.remove('erase');
      }
    });
  });

  useEffect(() => {
    if (textRef.current) {
      const children = textRef.current.querySelectorAll('.hidden');
      children.forEach((e) => observer.observe(e));
    }
  }, []);

  return (
    <div className="meeting-container nav" id="meeting">
      <div className="meeting" ref={textRef}>
        <h3 className="hidden">Meeting Information</h3>
        <span className="contact hidden">
          Email:{' '}
          <a href="mailto:first.nighter.avs@gmail.com">
            first.nighter.avs@gmail.com
          </a>
        </span>
        <div className="schedule">
          <div className="hidden">
            <span>Dates as Listed Above</span>
            <span>January - May</span>
            <span>September - November</span>
          </div>
          <div className="hidden">
            <span>Social Time</span>
            <span>6:30-7:00 p.m.</span>
            <span>Business Meeting & Program</span>
            <span>7:00-8:30 p.m.</span>
          </div>
          <div className="hidden">
            <span>McKinney Fire Station 5</span>
            <span>Community Room</span>
            <span>6600 Virginia Parkway</span>
            <span>McKinney, TX</span>
          </div>
        </div>
        <div className="schedule-wide hidden">
          <div>
            <span>Every Second Saturday</span>
            <span>January - May</span>
            <span>September - November</span>
          </div>
          <div>
            <span>Social Time</span>
            <span>6:30-7:00 p.m.</span>
            <span>Business Meeting & Program</span>
            <span>7:00-8:30 p.m.</span>
          </div>
          <div>
            <span>McKinney Fire Station 5</span>
            <span>Community Room</span>
            <span>6600 Virginia Parkway</span>
            <span>McKinney, TX</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Meeting;

import React, { useEffect, useRef } from 'react';
import ArrowRight from './images/icons/arrow-right';

//Horizontal photo calendar
const Events = () => {
  const eventsRef = useRef(null);

  let isDown = false;
  let isMove = false;
  let startX;
  let scrollLeft;

  useEffect(() => {
    bindEventHandler();
    const container = document.querySelectorAll('.calendar-obs');
    container.forEach((e) => sticky.observe(e));
  }, []);

  const sticky = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (
        entry.isIntersecting &&
        navigator.userAgent.toLowerCase().indexOf('firefox') <= -1
      ) {
        document.querySelector('.slider-parent').classList.add('stuck');
      } else {
        document.querySelector('.slider-parent').classList.remove('stuck');
      }
    });
  });

  const bindEventHandler = () => {
    eventsRef.current.addEventListener('mousedown', mouseDown);
    eventsRef.current.addEventListener('mouseleave', mouseLeave);
    eventsRef.current.addEventListener('mouseup', mouseUp);
    eventsRef.current.addEventListener('mousemove', mouseMove);
    const items = document.querySelectorAll('.travel');
    items.forEach((e) => e.addEventListener('click', jumpTo));
  };
  const mouseDown = (e) => {
    isMove = false;
    isDown = true;
    eventsRef.current.classList.add('active');
    startX = e.pageX - eventsRef.current.offsetLeft;
    scrollLeft = eventsRef.current.scrollLeft;
    setTimeout(() => {
      isMove = true;
    }, 100);
  };
  const mouseLeave = () => {
    isDown = false;
    eventsRef.current.classList.remove('active');
  };
  const mouseUp = () => {
    isDown = false;
    eventsRef.current.classList.remove('active');
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
    eventsRef.current.scrollLeft = e.target.closest('a').offsetLeft - 40;
  };

  return (
    <div id="programs" className="nav calendar-obs">
      <div className="calendar-container events-container">
        <div className="events">
          <h2>
            Hosted Programs <ArrowRight />
          </h2>
          <p>
            The public is cordially invited to attend our meetings where we
            share friendships, violets, gesneriads, and educational information.
          </p>
        </div>
        <div>
          <div className="calendar events event-calendar" ref={eventsRef}>
            <a className="travel">
              <div className="calendar-item">
                <figure className="leaf events-bg"></figure>
              </div>
              <div className="description">
                <h3>Separating Violet Babies from Mother Leaf</h3>
                <span>presented by Diane Miller</span>
                <span>September 8, 2025</span>
                <span>Hostesses: Cynthia Sudul and Karen Wyatt</span>
              </div>
            </a>
            <a className="travel">
              <div className="calendar-item">
                <figure className="episca events-bg"></figure>
              </div>
              <div className="description">
                <h3>Growing Episcias</h3>
                <span>presented by Amber Kirk</span>
                <span>October 13, 2025</span>
                <span>Hostesses: Mary Corondan and Suzanne Roberts</span>
              </div>
            </a>
            <a className="travel">
              <div className="calendar-item">
                <figure className="alps events-bg"></figure>
              </div>
              <div className="description">
                <h3>Growing for Show</h3>
                <span>presented by Mary Corondan</span>
                <span>November 17, 2025</span>
                <span>Hostesses: Marilin Puig and Vickie Portch</span>
              </div>
            </a>
            <a className="travel">
              <div className="calendar-item">
                <figure className="cajun events-bg"></figure>
              </div>
              <div className="description">
                <h3>Mini Violets, Favorite Things</h3>
                <span>presented by Carol Vaughan</span>
                <span>January 12, 2026</span>
                <span>Hosts: Larry Brock and David Finley</span>
              </div>
            </a>
            <a className="travel">
              <div className="calendar-item">
                <figure className="led events-bg"></figure>
              </div>
              <div className="description">
                <h3>LED Lighting for Violets</h3>
                <span>presented by Dr. Minh Bui</span>
                <span>February 9, 2026</span>
                <span>Hostesses: Sue Li and Carol Vaughan</span>
              </div>
            </a>
            <a className="travel">
              <div className="calendar-item">
                <figure className="flower events-bg"></figure>
              </div>
              <div className="description">
                <h3>Stress Free Strep Growing</h3>
                <span>presented by Diane Miller</span>
                <span>March 9, 2026</span>
                <span>Hostesses: Cindy Branch and Cathy Scheel</span>
              </div>
            </a>
            <a className="travel">
              <div className="calendar-item">
                <figure className="rob events-bg"></figure>
              </div>
              <div className="description">
                <h3>Decapitating and Potting from a Neck</h3>
                <span>presented by Suzanne Roberts</span>
                <span>April 13, 2026</span>
                <span>Hostesses, Sandy Fass and Diane Miller</span>
              </div>
            </a>
            <a className="travel">
              <div className="calendar-item">
                <figure className="bingo events-bg"></figure>
              </div>
              <div className="description">
                <h3>Leaf Bingo and AVSA Convention</h3>
                <span>presented by Dr. Minh Bui</span>
                <span>May 11, 2026</span>
                <span>Host/Hostess: Mike and Thelma Woodruff</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;

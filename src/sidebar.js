import React, { useEffect, useRef } from "react";
import flower from "./images/side-flower.webp";

//Mobile navbar
const Sidebar = () => {
  const navRef = useRef(null);
  let hamburger;

  useEffect(() => {
    bindEventHandler();
  }, []);

  const bindEventHandler = () => {
    hamburger = document.querySelector(".hamburger-container");
    hamburger.addEventListener("click", showNav);
  };

  const showNav = () => {
    if (navRef.current.classList.contains("visible")) {
      hamburger.style.right = "30px";
      navRef.current.style.transform = "translateX(100%)";
      navRef.current.classList.toggle("visible");
      return;
    }
    hamburger.style.right = "20px";
    navRef.current.style.transform = "translateX(0)";
    navRef.current.classList.toggle("visible");
  };

  return (
    <div className="sidebar" ref={navRef}>
      <nav>
        <ul>
          <a href="#home">
            <li>Home</li>
          </a>
          <a href="#meeting">
            <li>Meetings</li>
          </a>
          <a href="#programs">
            <li>Programs</li>
          </a>
          <a href="#community">
            <li>Community</li>
          </a>
          <a href="#values">
            <li>Values</li>
          </a>
          <a href="#goals">
            <li>Goals</li>
          </a>
        </ul>
      </nav>
      <div>
        <img src={flower} alt="african violet"></img>
      </div>
    </div>
  );
};

export default Sidebar;

import React, { useEffect, useRef } from "react";

function Values() {
  const textRef = useRef(null);

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  });

  useEffect(() => {
    if (textRef.current) {
      const children = textRef.current.querySelectorAll(".hidden");
      children.forEach((e) => observer.observe(e));
    }
  }, []);

  return (
    <div className="values-container nav" id="values">
      <div ref={textRef}>
        <div className="hidden">
          <h3>
            Our <span className="italic">Aim</span>
          </h3>
          <span>
            To promote widespread interest in African Violets and to study their
            growth habits.
          </span>
        </div>
        <div className="hidden">
          <h3>
            Our <span className="italic">Purpose</span>
          </h3>
          <span>
            To offer a beneficial association to those interested in African
            Violet culture.
          </span>
        </div>
        <figure></figure>
      </div>
    </div>
  );
}

export default Values;

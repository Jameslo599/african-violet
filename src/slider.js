import React, { useEffect, useRef } from "react";

const Slider = () => {
  const sliderRef = useRef(null);
  const sliderSlidesRef = useRef(null);
  const sliderNavRef = useRef(null);
  const sliderNavElementsRef = useRef(null);

  let slideWidth;
  let offset;

  useEffect(() => {
    initSlider();
    bindEventHandler();
  }, []);

  const initSlider = () => {
    // Get slide width
    slideWidth = sliderRef.current.offsetWidth;
    // Magic numbers for defining initial offset
    offset = slideWidth / 6;
  };

  const bindEventHandler = () => {
    // Handle scroll event on slider
    sliderRef.current.addEventListener("scroll", moveSlides);
    // Handle click event on nav elements
    sliderNavRef.current.addEventListener("click", handleClick);
  };

  const moveSlides = (event) => {
    // Scroll Position
    const position = event.target.scrollLeft / 6;
    // Set offset for each individual slide
    Array.from(sliderSlidesRef.current.children).forEach((slide, i) => {
      // Calculate X position of background
      const offsetX = i * offset - position;
      // Offset each slide from center based on its index
      slide.style.backgroundPosition = `calc(50% + ${offsetX}px) 0`;
    });
  };

  const handleClick = (event) => {
    if (!event.target.getAttribute("href")) return;
    // Don't change URL
    event.preventDefault();

    // Get number from id
    const position = parseInt(
      event.target.getAttribute("href").split("-").pop(),
      10
    );
    sliderRef.current.scrollTo({
      left: position * slideWidth,
      behavior: "smooth",
    });

    setActive(event.target);
  };

  const setActive = (element) => {
    document
      .querySelectorAll(".slider__anchor")
      .forEach((e) => e.classList.remove("slider__anchor--active"));
    element.classList.add("slider__anchor--active");
  };

  return (
    <div>
      <section className="wrapper__slider">
        {/* Slider Content */}
        <div className="slider" id="slider" ref={sliderRef}>
          <div className="slider__holder">
            <figure
              className="slider__slide"
              id="slide-0"
              ref={sliderSlidesRef}
            >
              <figcaption>first slide</figcaption>
            </figure>
            <figure
              className="slider__slide"
              id="slide-1"
              ref={sliderSlidesRef}
            >
              <figcaption>second slide</figcaption>
            </figure>
            <figure
              className="slider__slide"
              id="slide-2"
              ref={sliderSlidesRef}
            >
              <figcaption>third slide</figcaption>
            </figure>
          </div>
          {/* Slider Navigation */}
          <nav className="slider__nav" ref={sliderNavRef}>
            <a
              className="slider__anchor slider__anchor--active"
              href="#slide-0"
              ref={sliderNavElementsRef}
            >
              0
            </a>
            <a
              className="slider__anchor"
              href="#slide-1"
              ref={sliderNavElementsRef}
            >
              1
            </a>
            <a
              className="slider__anchor"
              href="#slide-2"
              ref={sliderNavElementsRef}
            >
              2
            </a>
          </nav>
          {/* END Slider Navigation  */}
        </div>
        {/* END Slider Content*/}
      </section>
      {/*END Slider Element</div> */}
    </div>
  );
};

export default Slider;

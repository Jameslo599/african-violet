import React, { useEffect, useRef } from "react";

//Slideshow with progress bar
const Slider = () => {
  const sliderRef = useRef(null);
  const sliderSlidesRef = useRef(null);
  const sliderNavRef = useRef(null);
  const sliderNavElementsRef = useRef(null);
  const progressRef = useRef(null);

  let tracker = 0;
  let slideWidth;
  let offset;

  useEffect(() => {
    initSlider();
    bindEventHandler();
    handleResize();
    loadBar();
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
    sliderRef.current.addEventListener("click", (e) => {
      e.preventDefault();
      console.log(12);
    });
    // Handle click event on nav elements
    sliderNavRef.current.addEventListener("click", handleClick);
    // Resize carousel when window changes
    window.addEventListener("resize", handleResize);
  };

  const handleResize = () => {
    slideWidth = sliderRef.current.offsetWidth;
    sliderRef.current.scrollTo({
      left:
        document.querySelector(".slider__anchor--active").innerText *
        slideWidth,
    });
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
    initSlider();
    const position = parseInt(
      event.target.getAttribute("href").split("-").pop(),
      10
    );
    sliderRef.current.scrollTo({
      left: position * slideWidth,
      behavior: "smooth",
    });

    setActive(event.target);
    tracker = position;
  };

  //Highlight selected button
  const setActive = (element) => {
    document
      .querySelectorAll(".slider__anchor")
      .forEach((e) => e.classList.remove("slider__anchor--active"));
    element.classList.add("slider__anchor--active");
  };

  //Fill progress gauge
  const loadBar = () => {
    setInterval(() => {
      if (progressRef.current.style.getPropertyValue("--width") >= 100) {
        initSlider();
        tracker < 2 ? tracker++ : (tracker = 0);
        sliderRef.current.scrollTo({
          left: tracker * slideWidth,
          behavior: "smooth",
        });
        setActive(document.querySelectorAll(".slider__anchor")[tracker]);
        return progressRef.current.style.setProperty("--width", 0);
      }
      const computedStyle = getComputedStyle(progressRef.current);
      const width = parseFloat(computedStyle.getPropertyValue("--width")) || 0;
      progressRef.current.style.setProperty("--width", width + 0.1);
    }, 15);
  };

  return (
    <div className="slider-parent">
      <section className="wrapper__slider">
        {/* Slider Content */}
        <div className="slider" id="slider" ref={sliderRef}>
          <div className="slider__holder">
            <h1>
              The First Nighter <br /> African Violet Society of{" "}
              <span className="italic">Dallas</span>
            </h1>
            <p>
              Promoting and Loving African Violets Since{" "}
              <span className="italic">1955</span>.
            </p>
            <figure
              className="slider__slide"
              id="slide-0"
              ref={sliderSlidesRef}
            ></figure>
            <figure
              className="slider__slide"
              id="slide-1"
              ref={sliderSlidesRef}
            ></figure>
            <figure
              className="slider__slide"
              id="slide-2"
              ref={sliderSlidesRef}
            ></figure>
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
      <div className="progress-bar" ref={progressRef}></div>
    </div>
  );
};

export default Slider;

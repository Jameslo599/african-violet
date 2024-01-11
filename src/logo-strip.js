import React, { useEffect, useRef } from "react";
import allen from "./images/allen.png";
import princeton from "./images/princeton.png";
import mckinney from "./images/mckinney.png";
import plano from "./images/plano.png";
import fairview from "./images/fairview.png";
import frisco from "./images/frisco.png";
import prosper from "./images/prosper.png";
import melissa from "./images/melissa.png";

const Logo = () => {
  const logoContainerRef = useRef(null);
  const logoRef = useRef(null);

  useEffect(() => {
    cloneNode(logoRef, logoContainerRef);
  }, []);

  const cloneNode = (ref, parent) => {
    const copy = ref.current.cloneNode(true);
    parent.current.appendChild(copy);
  };

  return (
    <div className="logos" ref={logoContainerRef}>
      <div className="logos-slide" ref={logoRef}>
        <img src={allen} alt="allen logo"></img>
        <img src={princeton} alt="princeton logo"></img>
        <img src={plano} alt="plano logo"></img>
        <img src={mckinney} alt="mckinney logo"></img>
        <img src={fairview} alt="fairview logo"></img>
        <img src={frisco} alt="frisco logo"></img>
        <img src={prosper} alt="prosper logo"></img>
        <img src={melissa} alt="melissa logo"></img>
      </div>
    </div>
  );
};
export default Logo;

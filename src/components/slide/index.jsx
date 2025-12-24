import React from "react";
import "./style.css";
import slideImage from "../../assets/slideImage.png";
import slideIcon from "../../assets/slideIcon.png";

function Slide() {
  return (
    <div className="slide">
      <div className="texts">
        <p>Скидка 15% на все подвесные светильники</p>
        <p className="fevral">до 5 февраля</p>
      </div>
      <img src={slideImage} alt="slide image" />
      <img src={slideIcon} alt="slide icon" className="slideIcon" />
    </div>
  );
}

export default Slide;

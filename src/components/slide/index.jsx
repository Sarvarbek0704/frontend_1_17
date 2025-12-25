import React from "react";
import "./style.css";
import slideImage from "../../assets/slideImage.png";
import slideIcon from "../../assets/slideIcon.png";

function Slide() {
  return (
    <div className="slide">
      <div className="slide-content">
        <div className="image-container">
          <img src={slideImage} alt="slide image" className="slide-image" />
          <img src={slideIcon} alt="slide icon" className="slideIcon" />
        </div>
        <div className="texts">
          <h1 className="main-text">Скидка 15% на все подвесные светильники</h1>
          <p className="fevral">до 5 февраля</p>
        </div>
      </div>
    </div>
  );
}

export default Slide;

import React from "react";
import slideImage from "../../assets/slideImage.png";
import slideIcon from "../../assets/slideIcon.png";
import {
  SlideContainer,
  SlideContent,
  ImageContainer,
  SlideImage,
  SlideIcon,
  TextsContainer,
  MainText,
  Fevral,
} from "./Slide.styled";

function Slide() {
  return (
    <SlideContainer>
      <SlideContent>
        <ImageContainer>
          <SlideImage src={slideImage} alt="slide image" />
          <SlideIcon src={slideIcon} alt="slide icon" />
        </ImageContainer>
        <TextsContainer>
          <MainText>Скидка 15% на все подвесные светильники</MainText>
          <Fevral>до 5 февраля</Fevral>
        </TextsContainer>
      </SlideContent>
    </SlideContainer>
  );
}

export default Slide;

import React from "react";
import "./style.css";
import catalogIcon from "../../assets/catalog-icon.png";
import { DostavkaIcon, MedalIcon, TangaIcon, YuklarIcon } from "../icons";

function Reasons() {
  const reasonsData = [
    {
      icon: <MedalIcon />,
      title: "Только проверенные бренды",
      description: "Бренды, проверенные временем и качеством",
    },
    {
      icon: <TangaIcon />,
      title: "Самые низкие цены",
      description: "Ниже не будет нигде",
    },
    {
      icon: <DostavkaIcon />,
      title: "Быстрая доставка",
      description: "Доставляем по всей РФ за 1-10 дней",
    },
    {
      icon: <YuklarIcon />,
      title: "Большой ассортимент",
      description: "Более 1000 товаров",
    },
  ];

  return (
    <div className="reasons">
      <div className="reasonsHeader">
        <h1>Почему NORNLIGHT?</h1>
        <button className="hammaKatalog">
          О компании <img src={catalogIcon} alt="catalogIcon" />
        </button>
      </div>
      <div className="cards">
        {reasonsData.map((reason, index) => (
          <div className="card" key={index}>
            <div className="icons">{reason.icon}</div>
            <div className="card-text">
              <h3>{reason.title}</h3>
              <p>{reason.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Reasons;

import React from "react";
import "./style.css";
import catalogIcon from "../../assets/catalog-icon.png";
import { DostavkaIcon, MedalIcon, TangaIcon, YuklarIcon } from "../icons";

function Reasons() {
  return (
    <div className="reasons">
      <div className="reasonsHeader">
        <h1>Почему NORNLIGHT?</h1>
        <button className="hammaKatalog">
          О компании <img src={catalogIcon} alt="catalogIcon" />
        </button>
      </div>
      <div className="cards">
        <div className="card">
          <MedalIcon className="icons" />
          <h3>Только проверенные бренды</h3>
          <p>Бренды, проверенные временем и качеством</p>
        </div>
        <div className="card">
          <TangaIcon className="icons" />
          <h3>Самые низкие цены</h3>
          <p>Ниже не будет нигде</p>
        </div>
        <div className="card">
          <DostavkaIcon className="icons" />
          <h3>Быстрая доствка</h3>
          <p>Доставляем по всей РФ за 1-10 дней</p>
        </div>
        <div className="card">
          <YuklarIcon className="icons" />
          <h3>Большой ассортимент</h3>
          <p>Более 1000 товаров</p>
        </div>
      </div>
    </div>
  );
}

export default Reasons;

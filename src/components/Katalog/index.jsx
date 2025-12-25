import React from "react";
import "./katalog.css";
import katalog1 from "../../assets/katalog1.png";
import katalog2 from "../../assets/katalog2.png";
import katalog3 from "../../assets/katalog3.png";
import katalog4 from "../../assets/katalog4.png";
import katalog5 from "../../assets/katalog5.png";
import katalog6 from "../../assets/katalog6.png";
import catalogIcon from "../../assets/catalog-icon.png";

function Katalog() {
  const categories = [
    {
      title: "Люстры",
      link: "От 540₽ →",
      icon: katalog1,
    },
    {
      title: "Торшеры",
      link: "От 540₽ →",
      icon: katalog2,
    },
    {
      title: "Светильники",
      link: "От 540₽ →",
      icon: katalog3,
    },
    {
      title: "Настольные лампы",
      link: "От 540₽ →",
      icon: katalog4,
    },
    {
      title: "Бра",
      link: "От 540₽ →",
      icon: katalog5,
    },
    {
      title: "Споты",
      link: "От 540₽ →",
      icon: katalog6,
    },
  ];

  return (
    <div className="katalog-container">
      <div className="katalog-header">
        <h2 className="katalog-subtitle">Каталог</h2>
        <button className="hammaKatalog">
          Весь каталог <img src={catalogIcon} alt="catalogIcon" />
        </button>
      </div>

      <div className="katalog-main">
        <div className="categories-grid">
          {categories.map((category, index) => (
            <div key={index} className="category-card">
              <div className="category-content">
                <div className="category-text">
                  <h3 className="category-title">{category.title}</h3>
                  <a href="#" className="category-link">
                    {category.link}
                  </a>
                </div>
                <div className="category-icon">
                  <img src={category.icon} alt={category.title} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Katalog;

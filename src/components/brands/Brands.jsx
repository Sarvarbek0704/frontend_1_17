import React from "react";
import brand1 from "../../assets/brand1.png";
import brand2 from "../../assets/brand2.png";
import brand3 from "../../assets/brand3.png";
import "./Brands.css";
import { Strelka, Strelka2 } from "../icons";

function Brands() {
  const brands = [
    { id: 1, image: brand1, alt: "Brand 1" },
    { id: 2, image: brand2, alt: "Brand 2" },
    { id: 3, image: brand3, alt: "Brand 3" },
    { id: 4, image: brand1, alt: "Brand 4" },
  ];

  return (
    <div className="brands">
      <div className="brands-header">
        <h1>Только проверенные бренды</h1>
        <div className="strelka">
          <Strelka />
          <Strelka2 />
        </div>
      </div>

      <div className="brand-cards">
        {brands.map((brand) => (
          <div className="brand-card" key={brand.id}>
            <img src={brand.image} alt={brand.alt} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Brands;

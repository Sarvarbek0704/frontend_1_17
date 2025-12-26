import React from "react";
import "./products.css";
import lyustra from "../../assets/lyustra.png";
import { CartIcon } from "../icons";
import catalogIcon from "../../assets/catalog-icon.png";
import { Link } from "react-router-dom";

function Products() {
  const products = Array(8).fill({
    title: "Встраиваемый светильник Novotech",
    oldPrice: "7 000₽",
    newPrice: "6 399₽",
    image: lyustra,
  });

  return (
    <div className="manage-product-container">
      <div className="katalog-header">
        <h2 className="katalog-subtitle">Популярные товары</h2>
        <Link to="/all-products" className="item">
          <button className="hammaKatalog">
            Все товары <img src={catalogIcon} alt="catalogIcon" />
          </button>
        </Link>
      </div>
      <div className="product-cards">
        {products.map((product, index) => (
          <div className="product-card" key={index}>
            <img src={product.image} alt={product.title} />
            <p className="title">{product.title}</p>
            <div className="product-card-footer">
              <div className="narx">
                <del>{product.oldPrice}</del>
                <p>{product.newPrice}</p>
              </div>
              <div className="buttons">
                <CartIcon color="white" width="16" height="16" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;

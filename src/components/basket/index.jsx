import React from "react";
import "./basket.css";
import Navbar from "../../layout/Navbar";
import Footer from "../../layout/Footer";
import lyustra from "../../assets/lyustra.png";

function Basket() {
  return (
    <div className="basket-page">
      <Navbar />
      <div className="basket-container">
        <h1>Корзина</h1>

        <div className="table-container desktop-view">
          <div className="table-header">
            <div className="header-cell">Фото</div>
            <div className="header-cell">Товары</div>
            <div className="header-cell">Описание</div>
            <div className="header-cell">Артикул</div>
            <div className="header-cell">Количество</div>
            <div className="header-cell"></div>
          </div>

          <div className="table-row">
            <div className="column-photo">
              <img src={lyustra} alt="Светильник" />
            </div>
            <div className="column-product">
              <div className="product-name">
                Встраиваемый светильник Novotech
              </div>
              <div className="product-price">6 399 ₽</div>
            </div>
            <div className="column-description">
              Светильник RADUGA COMBO XS Промышленное освещение; 50Вт; 230В; S4;
              XS;
            </div>
            <div className="column-article">
              RAD-COMBO-50/XXX/230/XXX/XXX/S4/XS
            </div>
            <div className="column-quantity">
              <div className="quantity-control">
                <button className="quantity-btn">-</button>
                <span className="quantity-value">1</span>
                <button className="quantity-btn">+</button>
              </div>
            </div>
            <div className="column-delete">
              <button className="delete-btn">×</button>
            </div>
          </div>

          <div className="table-row">
            <div className="column-photo">
              <img src={lyustra} alt="Светильник" />
            </div>
            <div className="column-product">
              <div className="product-name">
                Встраиваемый светильник Novotech
              </div>
              <div className="product-price">6 399 ₽</div>
            </div>
            <div className="column-description">
              Светильник RADUGA COMBO XS Промышленное освещение; 50Вт; 230В; S4;
              XS;
              <br />
              50Br; 230B; S4; XS;
            </div>
            <div className="column-article">
              RAD-COMBO-50/XXX/230/XXX/XXX/S4/XS
            </div>
            <div className="column-quantity">
              <div className="quantity-control">
                <button className="quantity-btn">-</button>
                <span className="quantity-value">1</span>
                <button className="quantity-btn">+</button>
              </div>
            </div>
            <div className="column-delete">
              <button className="delete-btn">×</button>
            </div>
          </div>
        </div>

        <div className="order-form-container">
          <h3 className="order-form-header">Оформление</h3>
          <div className="form-content">
            <div className="personal-info-form">
              <div className="form-group">
                <input type="text" placeholder="ФИО" />
              </div>
              <div className="form-group">
                <input type="tel" placeholder="Телефон" />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Электронная Почта" />
              </div>
            </div>

            <div className="delivery-form">
              <h4>Доставка</h4>
              <div className="form-group">
                <input type="text" placeholder="Адрес доставки" />
              </div>
              <div className="form-group">
                <textarea placeholder="Комментарий"></textarea>
              </div>
            </div>
          </div>
        </div>
        <div className="payment-summary">
          <h3>Оплата</h3>
          <div className="payment-details">
            <div className="payment-row">
              <span>Товары</span>
              <span>12 300 ₽</span>
            </div>
            <div className="payment-row">
              <span>Доставка</span>
              <span>580 ₽</span>
            </div>
            <div className="payment-row total">
              <span>12 800 ₽</span>
              <span className="total-price">12 800 ₽</span>
            </div>
          </div>

          <button className="buy-btn">Купить</button>

          <div className="privacy-checkbox">
            <input type="checkbox" id="privacy-agreement" defaultChecked />
            <label htmlFor="privacy-agreement">
              Я согласен на обработку моих персональных данных
            </label>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Basket;

import React from "react";
import "./footer.css";

import PaymentLogos from "../../assets/payments.png";
import { VkIcon } from "../../components";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-1">
        <img src="/logo-foot.svg" alt="Logo Footer" />
        <a href="tel:88008904656" className="tel">
          8 (800) 890-46-56
        </a>

        <img src={PaymentLogos} alt="Payments" />

        <a href="/">Политика конфиденциальности</a>
        <a href="/">Пользовательское соглашение</a>
        <div className="VKicons">
          <VkIcon />
          <VkIcon />
          <VkIcon />
        </div>
      </div>
      <div className="footer-2">
        <h3>Покупателям</h3>
        <a href="">О компании</a>
        <a href="">Доставка и оплата</a>
        <a href="">Возврат</a>
        <a href="">Гарантии</a>
        <a href="">Контакты</a>
        <a href="">Блог</a>
      </div>
      <div className="footer-3">
        <h3>Товары</h3>
        <div className="tovarlar">
          <a href="">Люстры</a>
          <a href="">Доставка и оплата</a>
          <a href="">Бра</a>
          <a href="">Торшеры</a>
          <a href="">Комплектующие</a>
          <a href="">Настольные лампы</a>
          <a href="">Споты</a>
          <a href="">Трековые светильники</a>
          <a href="">Уличные светильники</a>
          <a href="">Технические светильники</a>
          <a href="">Светодиодные ленты</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;

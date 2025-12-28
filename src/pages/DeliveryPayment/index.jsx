import React from "react";
import Navbar from "../../layout/Navbar";
import Footer from "../../layout/Footer";

import {
  DeliveryWrapper,
  BreadcrumbLink,
  BreadcrumbSpan,
  ContentContainer,
  LeftColumn,
  RightColumn,
  DeliverySection,
  SubSection,
  BlueText,
  FullWidthMap,
} from "./DeliveryPayment.styled";

function DeliveryPayment() {
  return (
    <div>
      <Navbar />
      <DeliveryWrapper>
        <BreadcrumbLink href="/">Главная {">"}</BreadcrumbLink>
        <BreadcrumbSpan> Доставка и оплата</BreadcrumbSpan>

        <ContentContainer>
          <LeftColumn>
            <h1>Доставка и оплата</h1>
          </LeftColumn>

          <RightColumn>
            <DeliverySection>
              <h2>Доставка</h2>
              <p>
                Мы осуществляем доставку со склада по Москве и Московской
                области собственной курьерской службой. Транспортными компаниями
                нашу продукцию мы доставляем по всей территории РФ, а также по
                всем странам СНГ.{" "}
                <BlueText>Сроки доставки: 4—6 недель</BlueText>
              </p>

              <SubSection>
                <h3>Курьерская доставка</h3>
                <p>
                  БЕСПЛАТНО доставим в приделах МКАД любой заказ{" "}
                  <BlueText>от 5 000 ₽.</BlueText> Заказы свыше{" "}
                  <BlueText>30 000 ₽</BlueText> имеют бесплатную доставку,
                  включительно 15 км от МКАД.
                </p>
              </SubSection>

              <SubSection>
                <h3>Самовывоз</h3>
                <p>
                  Любой заказ можно забрать самостоятельно по адресу: г. Москва,
                  Дмитровское шоссе д.100с2
                </p>
              </SubSection>
            </DeliverySection>
          </RightColumn>
        </ContentContainer>
      </DeliveryWrapper>

      <FullWidthMap>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d35315.22839838126!2d37.62929865910878!3d55.76395029425493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1suz!2s!4v1766925368101!5m2!1suz!2s"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Карта доставки"
        ></iframe>
      </FullWidthMap>

      <Footer />
    </div>
  );
}

export default DeliveryPayment;

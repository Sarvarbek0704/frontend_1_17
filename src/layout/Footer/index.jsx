import React from 'react';
import { FooterWrapper } from './Footer.styled';

import PaymentLogos from '../../assets/payments.png';

function Footer(props) {
    return (
        <FooterWrapper>
            <div className='container'>
                <div style={{ display: "flex", flexDirection: "column", maxWidth: "400px" }}>
                    <img src='/logo-foot.svg' alt='Logo Footer' />
                    <a href="tel:88008904656">8 (800) 890-46-56</a>

                    <img src={PaymentLogos} alt="Payments" />

                    <a href="/">Политика конфидециальности</a>
                    <a href="/">Пользовательское соглашение</a>
                </div>
            </div>
        </FooterWrapper>
    );
}

export default Footer;
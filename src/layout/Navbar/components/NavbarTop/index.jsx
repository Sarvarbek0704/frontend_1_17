import React from 'react';
import { 
    NavTopWrapper, 
    CustomNavLink, 
    NavTopSide, 
    OrderPhoneButton, 
    PhoneLink 
} from './NavbarTop.styled';

function NavbarTop(props) {
    return (
        <NavTopWrapper>
            <NavTopSide>
                <CustomNavLink to='/'>О компании</CustomNavLink>
                <CustomNavLink to='/'>Доставка и оплата</CustomNavLink>
                <CustomNavLink to='/'>Возврат</CustomNavLink>
                <CustomNavLink to='/'>Гарантии</CustomNavLink>
                <CustomNavLink to='/'>Контакты</CustomNavLink>
                <CustomNavLink to='/'>Блог</CustomNavLink>
            </NavTopSide>
            <NavTopSide>
                <PhoneLink href="tel:88008904656">8 (800) 890-46-56</PhoneLink>
                <OrderPhoneButton>Заказать звонок</OrderPhoneButton>
            </NavTopSide>
        </NavTopWrapper>
    );
}

export default NavbarTop;
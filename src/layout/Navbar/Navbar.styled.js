import styled from "styled-components";
import { bgColors, textColors } from "../../theme";

export const NavbarWrapper = styled.nav`
  padding: 12px;

  .mobile-content {
    display: none;
  }

  @media screen and (max-width: 900px) {
    padding: 10px 15px;

    .mobile-content {
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: relative;
    }

    .desktop-content {
      display: none;
    }
  }

  .mobile-opening-content {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: white;
    padding: 20px;
    z-index: 1000;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    max-height: 90vh;
    overflow-y: auto;
  }

  .mobile-opening-content.visible {
    display: block;
  }

  .mobile-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }

  .hamburger-btn {
    background: none;
    border: none;
    padding: 8px;
    cursor: pointer;
  }

  .mobile-logo {
    height: 40px;
    object-fit: contain;
  }

  .mobile-icons {
    display: flex;
    gap: 15px;
    align-items: center;
  }

  .mobile-icon-btn {
    background: none;
    border: none;
    padding: 5px;
    cursor: pointer;
  }

  .mobile-nav-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    padding-bottom: 15px;
    border-bottom: 1px solid #eee;
  }

  .close-btn {
    background: none;
    border: none;
    padding: 5px;
    cursor: pointer;
  }

  .mobile-catalog-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    width: 100%;
    height: 45px;
    margin-bottom: 20px;
    background-color: ${bgColors.primary};
    color: ${textColors.white};
    border: none;
    border-radius: 100px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
  }

  .mobile-links {
    text-align: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  .mobile-links a {
    width: 100%;
    border-bottom: 1px solid rgba(69, 69, 69, 0.1);
    text-decoration: none;
    color: ${textColors.secondary};
    font-size: 16px;
    padding: 8px 0;
  }

  .mobile-phone {
    border: none;
    text-align: center;
    display: flex;
    align-items: center;
    gap: 10px;
    color: ${textColors.primary} !important;
    font-weight: 600;
  }

  .call-back-btn {
    opacity: 50%;
    border: none;
    background: none;
    color: ${bgColors.primary};
    padding: 12px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    margin-top: 10px;
  }
`;

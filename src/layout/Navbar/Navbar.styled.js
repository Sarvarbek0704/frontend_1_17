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
    max-height: 80vh;
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

  .mobile-search {
    margin-bottom: 20px;
  }

  .mobile-search .input-wrapper {
    border: 1px solid ${bgColors.primary};
    border-radius: 100px;
    overflow: hidden;
  }

  .mobile-search input {
    width: 100%;
    height: 45px;
    padding: 10px 40px 10px 20px;
    border: none;
    outline: none;
    font-size: 16px;
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
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  .mobile-links a {
    text-decoration: none;
    color: ${textColors.secondary};
    font-size: 16px;
    padding: 8px 0;
  }

  .mobile-phone {
    display: flex;
    align-items: center;
    gap: 10px;
    color: ${textColors.primary} !important;
    font-weight: 600;
  }

  .call-back-btn {
    background: none;
    border: 1px solid ${bgColors.primary};
    color: ${bgColors.primary};
    padding: 12px;
    border-radius: 100px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    margin-top: 10px;
  }
`;

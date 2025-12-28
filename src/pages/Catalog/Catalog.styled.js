import styled from "styled-components";

export const CatalogWrapper = styled.div`
  margin: 60px;

  .breadcrumb {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 40px;
  }

  .catalogGrid {
    display: grid;
    grid-template-columns: repeat(3, 2fr);
    gap: 20px;
    justify-content: center;
  }
  .catalogGrid2 {
    display: grid;
    grid-template-columns: repeat(2, 3fr);
    gap: 20px;
    justify-content: center;
    padding-top: 20px;
  }

  .catalogCard {
    width: 100%;
    height: 250px;
    background: #f5f5f5;
    border-radius: 20px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }

  .catalogCard > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 32px 0 32px 32px;
    height: 200px;
    width: 245px;
  }

  /* ТЕКСТлар */
  .catalogCard > div > p:nth-child(2) {
    font-size: 14px;
    margin-top: auto;
  }

  .catalogText {
    font-size: 20px;
    font-weight: 500;
  }

  .catalogCard img {
    max-width: 180px;
    max-height: 180px;
    width: auto;
    height: auto;
    object-fit: contain;
  }

  .brands {
    padding-top: 72px;
    display: flex;
    gap: 30px;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-bottom: 100px;
  }

  .brands img {
    max-width: 160px;
    width: 100%;
    object-fit: contain;
  }

  .blogGrid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }

  .blogCard img {
    width: 100%;
    border-radius: 16px;
    padding-bottom: 29px;
  }

  .blogCard p:nth-child(2) {
    padding-bottom: 24px;
  }

  .blogWord {
    display: flex;
    justify-content: space-around;
    font-weight: 700;
    font-size: 20px;
    padding-bottom: 24px;
  }

  .blogDate {
    color: #454545;
    font-size: 14px;
  }

  .sectionHeader {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .sectionHeader h2 {
    font-size: 40px;
    font-weight: 700;
    margin-bottom: 53px;
  }

  .brandText {
    margin-top: 71px;
    font-size: 40px;
    font-weight: 700;
  }

  .sectionHeader button {
    background: transparent;
    border: 1px solid #454545;
    padding: 14px 48px;
    border-radius: 100px;
    cursor: pointer;
    margin-bottom: 53px;
  }

  .sectionHeaderButton > span {
    font-size: 16px;
    font-weight: 600;
    color: #454545;
  }
`;

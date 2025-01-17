import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 1rem 0;
  flex-wrap: wrap;
  .pageCard {
    height: 50px;
    padding: 0 20px;
    background: transparent;
    border: 1px solid #b7bcce;
    box-sizing: border-box;
    border-radius: 4px;
    margin: 0 6px;
    color: #b9bdcf;
    cursor: pointer;
    &:not([disabled]):hover {
      border: 1px solid rgb(255, 89, 89);
      color: rgb(255, 89, 89);
    }
  }
  .pageCard.active {
    background: rgb(255, 89, 89);
    border: 1px solid rgb(255, 89, 89);
    color: #fff;
  }

  @media (min-width: 320px) and (max-width: 576px) {
    .pageCard {
      height: 30px;
      padding: 0 10px;
      margin: 5px;
    }
  }

  @media (min-width: 577px) and (max-width: 1216px) {
    .pageCard {
      height: 40px;
      padding: 0 15px;
      margin: 5px;
    }
  }
`;

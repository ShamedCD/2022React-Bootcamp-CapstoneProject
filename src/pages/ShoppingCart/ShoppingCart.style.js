import styled from "styled-components";

export const Button = styled.button`
  background-color: rgb(255, 89, 89);
  padding: 15px 0;
  font-weight: bold;
  border-radius: 1rem;
  border: 2px solid rgb(255, 89, 89);
  margin: 10px 10px;
  font-size: 0.7rem;
  color: white;
  width: 50%;
  text-decoration: none;
  transition: all 0.3s ease-in;
  cursor: pointer;

  &:hover {
    background: transparent;
    color: rgb(255, 89, 89);
  }
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 5rem;
  width: auto;
  min-height: 85vh;

  @media (max-width: 576px) {
    margin: 7rem 2rem;
  }

  @media (min-width: 577px) and (max-width: 1024px) {
    margin: 4rem 5rem;
  }
`;

export const Col = styled.div`
  display: flex;
  align-items: ${(props) => (props.center ? "center" : "flex-start")};
  width: ${(props) => (props.width ? props.width : "100%")};
  flex-direction: column;
  padding: 0 2rem;

  @media (max-width: 1024px) {
    width: 100%;
    padding: 1rem;
  }
`;

export const ProductsContainer = styled.table`
  border-collapse: separate;
  width: 100%;
  border-spacing: 40px 20px;
  text-align: center;

  .header {
    text-transform: uppercase;
  }

  .card-image {
    width: 20%;
    height: auto;
  }

  .category {
    text-transform: uppercase;
    letter-spacing: 5px;
  }

  .price {
    font-weight: bold;
    color: rgb(255, 89, 89);
  }

  .remove-item {
    border: none;
    background: transparent;
    cursor: pointer;
    color: red;
    font-size: 1rem;
    transition: all 0.3s ease-in;

    &:hover {
      color: rgb(103, 111, 163);
    }
  }
`;

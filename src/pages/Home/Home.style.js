import styled from "styled-components";

export const Button = styled.button`
  background-color: rgb(246, 107, 14);
  padding: 15px 60px;
  font-weight: bold;
  border-radius: 5px;
  border: none;
  margin: 10px 0px;
  cursor: pointer;
  text-transform: uppercase;
  font-size: 1rem;
  color: white;
  width: auto;
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 3rem 5rem;
  max-width: 100%;

  @media (max-width: 576px) {
    margin: 7rem 2rem;
  }

  @media (min-width: 577px) and (max-width: 1024px) {
    margin: 4rem 5rem;
  }
`;

export const ProductsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  margin: 0;
  padding: 0;
`;

export const Title = styled.h4`
  text-align: center;
  display: block;
  width: 100%;
  text-transform: uppercase;
  letter-spacing: 5px;
  line-height: 100px;
  color: black;

  @media (max-width: 576px) {
    line-height: 60px;
  }
`;

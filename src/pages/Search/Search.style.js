import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 3rem 5rem;
  max-width: 100%;
  min-height: 95vh;

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

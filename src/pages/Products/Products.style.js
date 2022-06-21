import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  max-width: 100%;
  padding-top: 65px;
  min-height: 95vh;

  @media (max-width: 576px) {
    padding-top: 100px;
  }
`;

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: sticky;
  align-self: flex-start;

  @media (max-width: 576px) {
    margin-top: 20px;
  }
`;

export const FilterItem = styled.button`
  background-color: rgb(246, 107, 14);
  padding: 10px 0;
  font-weight: bold;
  border-radius: 5px;
  border: ${(props) => (props.active ? "rgb(246, 107, 14)" : "none")};
  margin: 10px 20px;
  cursor: pointer;
  text-transform: uppercase;
  font-size: 0.8rem;
  color: white;
  width: 220px;
  box-shadow: ${(props) =>
    props.active && props.active === true
      ? "0 0 0 0.25rem rgb(246 107 14 / 50%)"
      : "none"};

  @media (max-width: 576px) {
    font-size: 0.7rem;
    width: 80px;
  }

  @media (min-width: 577px) and (max-width: 992px) {
    font-size: 0.7rem;
    width: 120px;
  }
`;

export const FilterList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  align-items: center;

  @media (max-width: 576px) {
    align-items: flex-start;
  }
`;

export const Sidebar = styled.aside`
  display: flex;
  left: 0;
  max-width: 25%;
  background: white;
  flex-direction: column;

  @media (max-width: 576px) {
    max-width: 30%;
  }
`;

export const SidebarTitle = styled.h2`
  display: block;
  text-align: center;
`;

export const ProductsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 75%;
  margin: 0;
  padding: 0;
  flex-grow: 1;

  @media (max-width: 576px) {
    max-width: 70%;
  }
`;

export const Title = styled.h4`
  text-align: center;
  width: 100%;
  text-transform: uppercase;
  letter-spacing: 5px;
  line-height: 100px;
  color: black;

  @media (max-width: 576px) {
    display: none;
  }
`;

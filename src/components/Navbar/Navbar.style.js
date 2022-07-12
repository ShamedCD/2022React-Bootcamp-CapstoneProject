import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Button = styled.button`
  background-color: black;
  border-radius: 1rem;
  border: 2px solid black;
  cursor: pointer;
  text-transform: uppercase;
  font-size: 1rem;
  color: white;
  width: auto;
  text-decoration: none;
  transition: all 0.3s ease-in;
  display: ${(props) => (props.isActive ? "flex" : "none")};

  &:hover {
    background: transparent;
    color: black;
  }
`;

export const Logo = styled(Link)`
  padding: 1rem 0;
  color: black;
  text-decoration: none;
  font-weight: 900;
  font-size: 1.5rem;
  span {
    font-weight: 400;
    font-size: 1rem;
  }
`;

export const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  @media (max-width: 576px) {
    margin: 0 10px;
  }
`;

export const NavContainer = styled.div`
  padding: 0 2rem;
  min-height: 65px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  position: fixed;
  background: white;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;

  @media (max-width: 576px) {
    justify-content: center;
  }
`;

export const SearchContainer = styled.form`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  background: whitesmoke;
  border-radius: 1rem;
`;

export const SearchIcon = styled(FontAwesomeIcon)`
  padding: 0.5rem 0.7rem;
  background: transparent;
`;

export const SearchInput = styled.input`
  font-size: 1rem;
  background: transparent;
  border: none;
  line-height: 1;
  width: 100%;
  margin: 5px;

  &:focus,
  &:active {
    outline: none;
  }
`;

import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled(Link)`
  padding: 1rem 2rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: black;
  transition: all 0.3s ease-in;
  font-size: 0.9rem;

  &:hover {
    color: rgb(103, 111, 163);
  }
`;

export const Badge = styled.div`
  position: absolute;
  right: 19px;
  top: 8px;
  background-color: rgb(255, 89, 89);
  border-radius: 50%;
  width: 20px;
  height: 20px;
  justify-content: center;
  align-items: center;
  display: ${(props) => (props.itemsAdded > 0 ? "block" : "none")};

  .text {
    color: black;
    font-size: 0.6rem;
    font-weight: bold;
  }
`;

import styled from "styled-components";

export const StyledButton = styled.button`
  background-color: ${(props) =>
    props.background ? props.background : "rgb(246, 107, 14)"};
  padding: 15px 60px;
  border-radius: 5px;
  border: none;
  margin: 10px 0px;
  cursor: pointer;
  text-transform: uppercase;
  font-size: 1rem;
  font-weight: bold;
  color: white;
`;

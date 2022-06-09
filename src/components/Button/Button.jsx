import React from "react";
import { StyledButton } from "./Button.style";

const Button = (props) => {
  return <StyledButton onClick={props.onClick}>{props.text}</StyledButton>;
};

export default Button;

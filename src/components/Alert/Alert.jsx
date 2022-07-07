import React from "react";
import { Container } from "./Alert.style";

const Alert = ({ message }) => {
  return <Container>{message || "There is no results to show"}</Container>;
};

export default Alert;

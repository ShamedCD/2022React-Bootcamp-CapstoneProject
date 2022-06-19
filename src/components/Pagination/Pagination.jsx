import React from "react";
import { Container } from "./Pagination.style";

const Pagination = () => {
  return (
    <Container>
      <button className="pageCard">{`<`}</button>
      <button className="pageCard active">1</button>
      <button className="pageCard">2</button>
      <button className="pageCard">3</button>
      <button className="pageCard">{`>`}</button>
    </Container>
  );
};

export default Pagination;

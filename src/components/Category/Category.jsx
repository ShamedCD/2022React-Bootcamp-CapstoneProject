import React from "react";
import { Container, Image, Title, TitleContainer } from "./Category.style";

const Category = ({ category }) => {
  const { data } = category;

  return (
    <Container key={category.id}>
      <Image alt={data.main_image.alt} src={data.main_image.url} />
      <TitleContainer>
        <Title>{data.name}</Title>
      </TitleContainer>
    </Container>
  );
};

export default Category;

import React from "react";
import { Container, Image, Title, TitleContainer } from "./Category.style";

const Category = ({ category }) => {
  const { data, slugs } = category;

  return (
    <Container key={category.id}>
      <Image alt={data.main_image.alt} src={data.main_image.url} />
      <TitleContainer>
        <Title to={`/products?category=${slugs[0]}`}>{data.name}</Title>
      </TitleContainer>
    </Container>
  );
};

export default Category;

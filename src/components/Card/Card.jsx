import React from "react";
import {
  Button,
  ButtonContainer,
  CardContainer,
  CardContent,
  CardImage,
  CardTitleContainer,
} from "./Card.style";

const Card = ({ product, handleViewDetails, handleAddToCart }) => {
  const { data } = product;

  return (
    <CardContainer>
      <CardImage alt={data.mainimage.alt} src={data.mainimage.url} />
      <CardTitleContainer>
        <h4>{data.name}</h4>
        <sub>{data.category.slug.toUpperCase()}</sub>
      </CardTitleContainer>
      <CardContent>${data.price} USD</CardContent>
      <ButtonContainer>
        <Button data-key={product.id} onClick={handleViewDetails}>
          View details
        </Button>
        <Button isCart={true} onClick={handleAddToCart}>
          Add to cart
        </Button>
      </ButtonContainer>
    </CardContainer>
  );
};

export default Card;

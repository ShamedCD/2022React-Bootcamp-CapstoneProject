import styled from "styled-components";
import { Swiper } from "swiper/react/swiper-react";

export const Carousel = styled(Swiper)`
  margin-top: 30px;

  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    background: transparent;
  }

  @media (max-width: 576px) {
    margin-top: 10px;
  }
`;

export const SliderItem = styled.img`
  display: block;
  width: 70%;
  height: auto;
  object-fit: cover;

  @media (max-width: 1408px) {
    width: 100%;
  }
`;

import styled from "styled-components";
import { Swiper } from "swiper/react/swiper-react";

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 40px;
`;

export const Button = styled.button`
  background-color: ${(props) =>
    props.isCart && props.isCart === true ? "rgb(255, 89, 89)" : "black"};
  padding: 15px 0;
  font-weight: bold;
  border-radius: 1rem;
  border: ${(props) =>
    props.isCart && props.isCart === true
      ? "2px solid rgb(255, 89, 89)"
      : "2px solid black"};
  margin: 10px 10px;
  font-size: 0.7rem;
  color: white;
  width: 50%;
  text-decoration: none;
  transition: all 0.3s ease-in;
  cursor: pointer;

  &:hover {
    background: transparent;
    color: ${(props) =>
      props.isCart && props.isCart === true ? "rgb(255, 89, 89)" : "black"};
  }

  &:disabled {
    background-color: rgb(245, 128, 128);
    color: white;
    border: none;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 2rem;
  margin-top: 80px;
  max-width: 100%;

  .price {
    font-size: 2rem;
    color: rgb(255, 89, 89);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 0;
    font-weight: bold;
  }

  .stock {
    font-size: 0.8rem;
    color: gray;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
  }

  @media (max-width: 576px) {
    margin: 7rem 1rem;
    flex-direction: column;
  }

  @media (min-width: 577px) and (max-width: 1024px) {
    margin: 4rem 1rem;
    flex-direction: column;
  }
`;

export const Gallery = styled(Swiper)`
  &.childSwiper {
    width: 80%;
    height: 20%;
    margin-left: auto;
    margin-right: auto;
    box-sizing: border-box;
    padding: 10px 0;
  }

  &.childSwiper .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 25%;
    height: 100%;
    opacity: 0.4;
    background-size: cover;
    background-position: center;
  }

  &.childSwiper .swiper-slide > img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &.mainSwiper {
    width: 80%;
    height: 50%;
    margin-left: auto;
    margin-right: auto;
  }

  &.mainSwiper .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    height: auto;
  }

  &.mainSwiper .swiper-slide > img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 1024px) {
    &.mainSwiper {
      width: 100%;
      margin-left: auto;
      margin-right: auto;
    }
  }
`;

export const SliderImg = styled.img`
  display: block;
  width: 70%;
  height: auto;
  object-fit: cover;

  @media (max-width: 1408px) {
    width: 100%;
  }
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  width: ${(props) => (props.width ? props.width : "100%")};
  flex-direction: column;
  padding: 2rem 3rem;

  @media (max-width: 1024px) {
    width: 100%;
    padding: 1rem;
  }
`;

export const Tag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px 10px;
  padding: 0 15px;
  height: 35px;
  min-width: 120px;
  font-size: 0.7rem;
  border-radius: 1rem;
  border: 2px solid rgb(255, 89, 89);
  background: transparent;
`;

export const TagsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 10px;
`;

export const Title = styled.div`
  margin-bottom: 1rem;

  .extra-info {
    text-transform: uppercase;
    color: gray;
  }

  .extra-info > .category {
    letter-spacing: 5px;
  }

  @media (max-width: 1024px) {
    margin: 0;
  }
`;

export const Divider = styled.hr`
  border: 0;
  height: 1px;
  background: #333;
  background-image: linear-gradient(to right, #ccc, #333, #ccc);
  width: 70%;
  align-self: center;
`;

export const Description = styled.div`
  margin-top: 2rem;
  align-self: center;

  .description {
    text-align: justify;
  }
`;

export const Specs = styled.div`
  display: flex;
  padding: 10px 0;
  margin: 20px 0;
`;

export const Table = styled.table`
  border: none;
  border-collapse: collapse;
`;

export const THeader = styled.th`
  border: none;
  background-color: #c2c2c2;
`;

export const TD = styled.td`
  border: 1px solid black;
  padding: 5px 10px;
`;

export const Counter = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  .counter-btn {
    width: 50px;
    height: 52px;
    border: 2px solid black;
    background: black;
    color: white;
    font-size: 1rem;
    transition: all 0.3s ease-in;

    &:hover {
      border: 2px solid rgb(255, 89, 89);
      color: rgb(255, 89, 89);
    }
  }

  .counter-btn.right {
    border-radius: 0 1rem 1rem 0;
  }

  .counter-btn.left {
    border-radius: 1rem 0 0 1rem;
  }

  .counter-field {
    border: none;
    width: 50px;
    height: 52px;
    border-left: 1px solid lightgray;
    border-right: 1px solid lightgray;
    text-align: center;
  }
`;

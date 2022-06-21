import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: auto;
  padding: 0;
  margin: 0 20px;
  background-color: white;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);

  @media (min-width: 320px) and (max-width: 768px) {
    width: 200px;
    margin: 10px 20px;
  }

  @media (min-width: 769px) {
    width: 300px;
    margin: 10px 20px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 1rem 1rem 0 0;
`;

export const Title = styled.p`
  position: relative;
  text-decoration: none;
  color: #333;
  text-transform: uppercase;
  letter-spacing: 5px;
  cursor: pointer;

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 4px;
    border-radius: 4px;
    color: rgb(255, 89, 89);
    background-color: rgb(255, 89, 89);
    bottom: 0;
    left: 0;
    transform-origin: right;
    transform: scaleX(0);
    transition: transform 0.3s ease-in-out;
  }

  &:hover::before {
    transform-origin: left;
    transform: scaleX(1);
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #333;
  text-align: center;
  padding: 0.8rem 0;

  @media (max-width: 576px) {
    line-height: 20px;
  }
`;

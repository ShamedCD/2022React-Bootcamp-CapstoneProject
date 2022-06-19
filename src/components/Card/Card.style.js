import styled from "styled-components";

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-self: flex-end;
  width: 100%;
  margin-top: auto;
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
`;

export const CardContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 450px;
  padding: 0;
  margin: 20px;
  border-radius: 1rem;
  background-color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  width: 315px;

  @media (min-width: 320px) and (max-width: 480px) {
    width: 100%;
    min-height: auto;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    min-height: auto;
  }
`;

export const CardContent = styled.p`
  margin: 0.5rem 0;
  color: rgb(255, 89, 89);
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: auto;
`;

export const CardImage = styled.img`
  width: 60%;
  height: auto;
  object-fit: cover;
  margin-top: 10px;
`;

export const CardTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #333;
  text-align: center;
  padding-top: 1rem;

  @media (min-width: 320px) and (max-width: 480px) {
    padding: 10px 10px 0 10px;
    font-size: 1rem;
  }
`;

export const Tags = styled.div`
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

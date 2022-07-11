import styled from "styled-components";

export const Button = styled.button`
  background-color: rgb(255, 89, 89);
  padding: 10px 0;
  font-weight: bold;
  border-radius: 1rem;
  border: 2px solid rgb(255, 89, 89);
  margin: ${(props) => (props.margin ? props.margin : "10px")};
  font-size: 0.7rem;
  color: white;
  width: ${(props) => (props.width ? props.width : "150px")};
  text-decoration: none;
  transition: all 0.3s ease-in;
  cursor: pointer;

  &:hover {
    background: transparent;
    color: rgb(255, 89, 89);
  }
`;

export const Col = styled.div`
  display: flex;
  align-items: center;
  width: ${(props) => (props.width ? props.width : "100%")};
  flex-direction: column;
  padding: 0 2rem;
  min-height: 65vh;
  justify-content: ${(props) => (props.center ? "center" : "flex-start")};
  align-items: center;

  @media (max-width: 1024px) {
    width: 100%;
    padding: 1rem;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 2rem;
  margin-top: 60px;
  max-width: 100%;
  border: 1px solid;
  min-height: 85vh;

  @media (max-width: 576px) {
    margin: 7rem 1rem;
    flex-direction: column;
  }

  @media (min-width: 577px) and (max-width: 1024px) {
    margin: 4rem 1rem;
    flex-direction: column;
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

export const ErrorMessage = styled.span`
  font-size: 0.6rem;
  color: red;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 70%;
  padding: 3rem;
  background: white;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);

  @media (max-width: 576px) {
    width: 100%;
    padding: 1rem;
  }

  @media (min-width: 577px) and (max-width: 1024px) {
    width: 90%;
  }
`;

export const FormGroup = styled.div`
  margin-bottom: 15px;
`;

export const Input = styled.input`
  font-size: 1rem;
  background: white;
  border: 2px solid lightgray;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  line-height: 1;
  width: 100%;
  margin-top: 5px;
  padding: 10px 0;
  border-radius: 0.5rem;

  &:focus,
  &:active {
    outline: 2px solid rgb(255, 89, 89);
  }
`;

export const TextArea = styled.textarea`
  font-size: 0.8rem;
  background: white;
  border: 2px solid lightgray;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  width: 100%;
  height: 100px;
  border-radius: 0.5rem;
  margin-top: 5px;
  margin-bottom: 15px;

  &:focus,
  &:active {
    outline: 2px solid rgb(255, 89, 89);
  }
`;

export const ProductsContainer = styled.table`
  border-collapse: separate;
  width: 100%;
  border-spacing: 40px 20px;
  text-align: center;
  margin-top: 1rem;

  .header {
    text-transform: uppercase;
  }
`;

export const TotalPrice = styled.h3`
  display: flex;
  align-self: flex-end;
  margin-top: 1rem;
`;

export const BackToCart = styled.button`
  display: flex;
  align-self: flex-start;
  background: transparent;
  margin: 10px;
  padding: 10px 5px;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  border: 2px solid transparent;

  &:hover {
    color: rgb(255, 89, 89);
    border: 2px solid rgb(255, 89, 89);
    border-radius: 1rem;
  }

  .icon {
    margin-right: 5px;
  }
`;

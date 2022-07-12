import React from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  BackToCart,
  Button,
  Col,
  Container,
  Divider,
  ErrorMessage,
  FormContainer,
  FormGroup,
  Input,
  ProductsContainer,
  TextArea,
  TotalPrice,
} from "./Checkout.style";

import { EMAIL_REGEX } from "../../utils/constants";

const Checkout = () => {
  const navigate = useNavigate();
  const { cartItems, cartTotalAmout } = useSelector((state) => state.cart);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  const renderTableBody = (products) => {
    return products.map((product) => (
      <tr key={product.id}>
        <td className="product">
          <h4>{product.data.name}</h4>
        </td>
        <td>{product.quantity}</td>
        <td>${product.quantity * product.data.price} USD</td>
      </tr>
    ));
  };

  return (
    <Container>
      <Col width="50%">
        <BackToCart onClick={() => navigate("/cart", { replace: true })}>
          <FontAwesomeIcon className="icon" icon={faArrowLeft} />
          <span> Go back to Cart</span>
        </BackToCart>
        <FormContainer onSubmit={handleSubmit(onSubmit)}>
          <FormGroup>
            <label>Name:</label>
            <Input {...register("name", { required: true, maxLength: 50 })} />
            {errors.name && <ErrorMessage>This field is required</ErrorMessage>}
          </FormGroup>

          <FormGroup>
            <label>Last Name:</label>
            <Input
              {...register("lastName", { required: true, maxLength: 50 })}
            />
            {errors.lastName && (
              <ErrorMessage>This field is required</ErrorMessage>
            )}
          </FormGroup>

          <FormGroup>
            <label>Email:</label>
            <Input
              {...register("email", { required: true, pattern: EMAIL_REGEX })}
            />
            {errors.email && (
              <ErrorMessage>This field is required</ErrorMessage>
            )}
          </FormGroup>

          <FormGroup>
            <label>Zip Code:</label>
            <Input {...register("zipCode", { required: true })} />
            {errors.zipCode && (
              <ErrorMessage>This field is required</ErrorMessage>
            )}
          </FormGroup>

          <FormGroup>
            <label>Notes:</label>
            <TextArea {...register("notes")} />
          </FormGroup>
          <Button type="submit" width="100%" margin="0">
            Submit order
          </Button>
        </FormContainer>
      </Col>
      <Col width="50%">
        <ProductsContainer>
          <thead className="header">
            <tr>
              <th>Product</th>
              <th>Quantity</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>{renderTableBody(cartItems)}</tbody>
        </ProductsContainer>
        <Divider />
        <TotalPrice>Total: ${cartTotalAmout} USD</TotalPrice>
      </Col>
    </Container>
  );
};

export default Checkout;

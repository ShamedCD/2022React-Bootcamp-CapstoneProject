import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

import {
  Container,
  ProductsContainer,
  Col,
  Button,
} from "./ShoppingCart.style";

import { removeFromCart, updateQuantity } from "../../utils/slices/cartSlice";

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cartItems, cartTotalAmout } = useSelector((state) => state.cart);

  const handleRemoveFromCart = (productKey, e) => {
    e.preventDefault();

    dispatch(removeFromCart({ productKey }));
  };

  const handleUpdateQuantity = (productKey, e) => {
    e.preventDefault();
    const quantity = e.target.value;

    dispatch(updateQuantity({ productKey, quantity }));
  };

  const renderTableBody = (products) => {
    return products.map((product) => (
      <tr key={product.id}>
        <td className="product">
          <img
            alt={product.data.mainimage.alt}
            src={product.data.mainimage.url}
            className="card-image"
          />
          <h4>{product.data.name}</h4>
          <sub className="category">{product.data.category.slug}</sub>
        </td>
        <td className="price">${product.data.price} USD</td>
        <td>{product.quantity}</td>
        <td>${product.quantity * product.data.price} USD</td>
        <td>
          <input
            type="number"
            value={product.quantity}
            onChange={handleUpdateQuantity.bind(this, product.id)}
          />
        </td>
        <td>
          <button
            type="button"
            className="remove-item"
            onClick={handleRemoveFromCart.bind(this, product.id)}
          >
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </td>
      </tr>
    ));
  };

  return (
    <Container>
      <Col width="70%" style={{ overflowX: "auto" }}>
        <ProductsContainer>
          <thead className="header">
            <tr>
              <th>Product</th>
              <th>Unit Price</th>
              <th>Quantity</th>
              <th>Subtotal</th>
              <th colSpan={2}>Options</th>
            </tr>
          </thead>
          <tbody>{renderTableBody(cartItems)}</tbody>
        </ProductsContainer>
      </Col>
      <Col width="30%" center={true}>
        <h1>Total</h1>
        <p>${cartTotalAmout} USD</p>
        <Button onClick={() => navigate("/checkout", { replace: true })}>
          Checkout
        </Button>
      </Col>
    </Container>
  );
};

export default ShoppingCart;

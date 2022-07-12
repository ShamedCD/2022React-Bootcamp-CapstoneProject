import React from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

import { Badge, Container } from "./Cart.style";

const Cart = () => {
  const { cartTotalQuantity } = useSelector((state) => state.cart);

  return (
    <>
      <Container to="/cart">
        <FontAwesomeIcon icon={faCartShopping} />
        <Badge itemsAdded={cartTotalQuantity}>
          <span className="text">{cartTotalQuantity}</span>
        </Badge>
      </Container>
    </>
  );
};

export default Cart;

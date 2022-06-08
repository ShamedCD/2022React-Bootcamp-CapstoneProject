import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faSearch } from "@fortawesome/free-solid-svg-icons";

import {
  Logo,
  Menu,
  MenuItem,
  NavContainer,
  SearchContainer,
  SearchIcon,
  SearchInput,
} from "./Navbar.style";

const Navbar = () => {
  return (
    <NavContainer>
      <Logo href="">
        React<span>Furniture</span>
      </Logo>
      <Menu>
        <SearchContainer onSubmit={(e) => e.preventDefault()}>
          <SearchIcon icon={faSearch} />
          <SearchInput type={"search"} placeholder="Search..." />
        </SearchContainer>
        <MenuItem href="/">
          <FontAwesomeIcon icon={faCartShopping} />
        </MenuItem>
      </Menu>
    </NavContainer>
  );
};

export default Navbar;

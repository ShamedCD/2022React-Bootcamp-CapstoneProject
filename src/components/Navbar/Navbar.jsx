import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faSearch } from "@fortawesome/free-solid-svg-icons";

import {
  Button,
  Logo,
  Menu,
  MenuItem,
  NavContainer,
  SearchContainer,
  SearchIcon,
  SearchInput,
} from "./Navbar.style";

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();

  function handleSearch(e) {
    e.preventDefault();

    navigate(`/search?q=${searchTerm}`, { replace: true });
  }

  function updateSearchTerm(e) {
    setSearchTerm(e.target.value);
    e.target.value === "" ? setIsActive(false) : setIsActive(true);
  }

  return (
    <NavContainer>
      <Logo to="/">
        React<span>Furniture</span>
      </Logo>
      <Menu>
        <SearchContainer onSubmit={handleSearch}>
          <SearchInput
            type={"search"}
            placeholder="Search..."
            value={searchTerm}
            onChange={updateSearchTerm}
          />
          <Button type="submit" isActive={isActive}>
            <SearchIcon icon={faSearch} />
          </Button>
        </SearchContainer>
        <MenuItem to="/">
          <FontAwesomeIcon icon={faCartShopping} />
        </MenuItem>
      </Menu>
    </NavContainer>
  );
};

export default Navbar;

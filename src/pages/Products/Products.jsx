import React, { useEffect, useState } from "react";

import Card from "../../components/Card/Card";
import Pagination from "../../components/Pagination/Pagination";

import {
  Container,
  FilterContainer,
  FilterItem,
  FilterList,
  ProductsContainer,
  Sidebar,
  Title,
} from "../Products/Products.style";
import { Loader } from "../../components/Loader.style";

import categories from "../../mocks/en-us/product-categories.json";

const Products = ({ products }) => {
  const [items, setItems] = useState(products);
  const [loader, setLoader] = useState(true);
  const [filters, setFilters] = useState({});

  // Initial useEffect to load the products
  useEffect(() => {
    // Function that creates the categories state
    function getAllCategories() {
      const filters = categories.results.reduce((acc, elem) => {
        acc[elem.id] = {
          key: elem.id,
          name: elem.data.name.toLocaleLowerCase(),
          active: false,
        };
        return acc;
      }, {});

      return filters;
    }
    const loading = setTimeout(() => setLoader(false), 2000);
    const filterItems = getAllCategories();
    setFilters(filterItems);

    return () => clearTimeout(loading);
  }, []);

  useEffect(() => {
    const selectedFilters = Object.values(filters)
      .filter((category) => {
        return category.active;
      })
      .map((item) => {
        return item.name;
      });

    let filteredProducts = products;

    if (selectedFilters.length > 0) {
      filteredProducts = products.filter((product) => {
        return selectedFilters.includes(product.data.category.slug);
      });
    }

    setItems(filteredProducts);
  }, [filters, products]);

  // Function that handle the filters
  function handleFilter(e) {
    e.preventDefault();

    const { key } = e.target.dataset;
    filters[key].active = !filters[key].active;
    setFilters({ ...filters });
  }

  return (
    <Container>
      <Sidebar>
        <FilterContainer>
          <Title>Categories</Title>
          <FilterList>
            {Object.entries(filters).map(([key, category]) => (
              <li key={key}>
                <FilterItem
                  data-key={key}
                  active={filters[key].active}
                  onClick={handleFilter}
                >
                  {category.name}
                </FilterItem>
              </li>
            ))}
          </FilterList>
        </FilterContainer>
      </Sidebar>
      <ProductsContainer>
        {loader ? (
          <Loader />
        ) : (
          <>
            <Title>All products</Title>
            {items.map((product) => (
              <Card key={product.id} product={product} />
            ))}
            <Pagination />
          </>
        )}
      </ProductsContainer>
    </Container>
  );
};

export default Products;

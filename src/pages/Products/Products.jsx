import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

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

import { useFeaturedCategories } from "../../utils/hooks/useFeaturedCategories";
import { useProducts } from "../../utils/hooks/useProducts";

const Products = () => {
  const [items, setItems] = useState([]);
  const [filters, setFilters] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [filtersCleared, setFiltersCleared] = useState(true);

  const [searchParams] = useSearchParams();

  const { data: products, isLoading: pIsLoading } = useProducts(currentPage);
  const { data: categories, isLoading: cIsLoading } = useFeaturedCategories();

  // Initial useEffect to load the products
  useEffect(() => {
    const abortController = new AbortController();
    // Function that creates the categories state
    function getAllCategories() {
      const filters = categories.results.reduce(
        (acc, { id, data: { name } }) => {
          const elem_key = name.toLocaleLowerCase().replace(" & ", "--");
          acc[elem_key] = {
            key: id,
            name: name.toLocaleLowerCase(),
            active: false,
          };
          return acc;
        },
        {}
      );

      return filters;
    }

    if (!cIsLoading && !pIsLoading) {
      const filterItems = getAllCategories();
      const searchParam = searchParams.get("category");

      if (searchParam) {
        setFiltersCleared(false);
        filterItems[searchParam].active = true;
      }

      setFilters(filterItems);
    }

    return () => abortController.abort();
  }, [categories, cIsLoading, pIsLoading, searchParams]);

  useEffect(() => {
    if (!cIsLoading && !pIsLoading) {
      const selectedFilters = Object.values(filters)
        .filter((category) => {
          return category.active;
        })
        .map((item) => {
          return item.name;
        });

      let filteredProducts = products.results;
      const searchParam = searchParams.get("category");

      if (
        searchParam &&
        !selectedFilters.includes(searchParam) &&
        !filtersCleared
      ) {
        selectedFilters.push(searchParam);
      }

      if (selectedFilters.length > 0) {
        filteredProducts = products.results.filter((product) => {
          return selectedFilters.includes(product.data.category.slug);
        });
      }

      setItems(filteredProducts);
    }
  }, [
    filters,
    products,
    pIsLoading,
    cIsLoading,
    searchParams,
    filtersCleared,
    currentPage,
  ]);

  // Function that handle the filters
  function handleFilter(e) {
    e.preventDefault();

    const { key } = e.target.dataset;
    filters[key].active = !filters[key].active;
    setFilters({ ...filters });
  }

  function clearFilters(e) {
    e.preventDefault();

    const clearFilters = {};
    setFiltersCleared(true);
    Object.keys(filters).forEach((key) => {
      filters[key].active = false;
      const element = Object.assign({}, { ...filters[key] });
      clearFilters[key] = element;
    });

    setFilters({ ...clearFilters });
  }

  return (
    <Container>
      {pIsLoading && cIsLoading ? (
        <Loader />
      ) : (
        <>
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
                {Object.values(filters).some((el) => el.active) ? (
                  <FilterItem onClick={clearFilters}>Clear Filters</FilterItem>
                ) : null}
              </FilterList>
            </FilterContainer>
          </Sidebar>
          <ProductsContainer>
            <Title>All products</Title>
            {items.map((product) => (
              <Card key={product.id} product={product} />
            ))}
            <Pagination
              currentPage={currentPage}
              pageSize={products.results_per_page}
              totalPages={products.total_page}
              setCurrentPage={setCurrentPage}
            />
          </ProductsContainer>
        </>
      )}
    </Container>
  );
};

export default Products;

import React, { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

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
import { addToCart } from "../../utils/slices/cartSlice";

const Products = () => {
  const [items, setItems] = useState([]);
  const [filters, setFilters] = useState({});
  const [reqFilters, setReqFilters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [filtersCleared, setFiltersCleared] = useState(true);

  const [searchParams] = useSearchParams();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { data: products, isLoading: pIsLoading } = useProducts({
    currentPage,
    reqFilters,
  });
  const { data: categories, isLoading: cIsLoading } = useFeaturedCategories();

  const handleViewDetails = (e) => {
    e.preventDefault();
    const { key } = e.target.dataset;
    navigate(`/product/${key}`, { replace: true });
  };

  const handleAddToCart = (product, e) => {
    e.preventDefault();

    dispatch(addToCart({ product }));
  };

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

    if (!cIsLoading && !pIsLoading && reqFilters.length === 0) {
      const filterItems = getAllCategories();
      const searchParam = searchParams.get("category");

      if (searchParam) {
        setFiltersCleared(false);
        filterItems[searchParam].active = true;
      }

      setFilters(filterItems);
    }

    return () => abortController.abort();
  }, [categories, cIsLoading, pIsLoading, searchParams, products, reqFilters]);

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
      setTotalPages(products.total_pages);
    }
  }, [
    filters,
    products,
    pIsLoading,
    cIsLoading,
    searchParams,
    filtersCleared,
    currentPage,
    totalPages,
  ]);

  // Function that handle the filters
  function handleFilter(e) {
    e.preventDefault();

    const { key } = e.target.dataset;
    filters[key].active = !filters[key].active;
    setFilters({ ...filters });

    const tmpReqFilters = [];
    Object.keys(filters).forEach((key) => {
      if (filters[key].active) {
        tmpReqFilters.push(filters[key].key);
      }
    });
    setReqFilters(tmpReqFilters);
  }

  function clearFilters(e) {
    e.preventDefault();
    window.location.reload(false);
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
              <Card
                key={product.id}
                product={product}
                handleViewDetails={handleViewDetails}
                handleAddToCart={handleAddToCart.bind(this, product)}
              />
            ))}
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              setCurrentPage={setCurrentPage}
            />
          </ProductsContainer>
        </>
      )}
    </Container>
  );
};

export default Products;

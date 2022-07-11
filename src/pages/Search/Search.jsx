import React, { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

import Card from "../../components/Card/Card";
import Pagination from "../../components/Pagination/Pagination";
import Alert from "../../components/Alert/Alert";
import { Container, ProductsContainer } from "./Search.style";

import { useSearchProducts } from "../../utils/hooks/useSearchProducts";
import { Loader } from "../../components/Loader.style";

const Search = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const [search] = useSearchParams();
  const navigate = useNavigate();

  const { data: products, isLoading } = useSearchProducts({
    searchTerm: search.get("q"),
    currentPage,
  });

  useEffect(() => {
    if (!isLoading) {
      setCurrentPage(products.page);
      setPageCount(products.total_pages);
    }
  }, [currentPage, pageCount, isLoading, products]);

  const handleViewDetails = (e) => {
    e.preventDefault();
    const { key } = e.target.dataset;
    navigate(`/product/${key}`, { replace: true });
  };

  return (
    <Container>
      {isLoading ? (
        <Loader />
      ) : products.results.length > 0 ? (
        <ProductsContainer>
          {products.results.map((product) => (
            <Card
              key={product.id}
              product={product}
              handleViewDetails={handleViewDetails}
            />
          ))}
          <Pagination
            currentPage={currentPage}
            pageSize={pageCount}
            setCurrentPage={setCurrentPage}
          />
        </ProductsContainer>
      ) : (
        <Alert
          message={`There are no products with the term: ${search.get("q")}`}
        />
      )}
    </Container>
  );
};

export default Search;

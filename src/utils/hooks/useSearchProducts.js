import { useState, useEffect } from "react";
import { API_BASE_URL } from "../constants";
import { useLatestAPI } from "./useLatestAPI";

export const useSearchProducts = ({ searchTerm, currentPage }) => {
  const { ref: apiRef, isLoading: isApiMetadataLoading } = useLatestAPI();
  const [searchProducts, setSearchProducts] = useState({
    data: {},
    isLoading: true,
  });

  useEffect(() => {
    if (!apiRef || isApiMetadataLoading) {
      return () => {};
    }

    const controller = new AbortController();

    async function getProducts() {
      try {
        setSearchProducts({ data: {}, isLoading: true });

        const response = await fetch(
          `${API_BASE_URL}/documents/search?ref=${apiRef}&q=${encodeURIComponent(
            '[[at(document.type, "product")]]'
          )}&q=${encodeURIComponent(
            `[[fulltext(document, "${searchTerm}")]]`
          )}&lang=en-us&pageSize=20&page=${currentPage}`,
          { signal: controller.signal }
        );

        const data = await response.json();

        setSearchProducts({ data, isLoading: false });
      } catch (error) {
        setSearchProducts({ data: {}, isLoading: true });
        console.error(error);
      }
    }

    getProducts();

    return () => controller.abort();
  }, [apiRef, isApiMetadataLoading, searchTerm, currentPage]);

  return searchProducts;
};

import { useState, useEffect } from "react";
import { API_BASE_URL } from "../constants";
import { useLatestAPI } from "./useLatestAPI";

export const useProducts = (currentPage) => {
  const { ref: apiRef, isLoading: isApiMetadataLoading } = useLatestAPI();
  const [products, setProducts] = useState({
    data: {},
    isLoading: true,
  });

  useEffect(() => {
    if (!apiRef || isApiMetadataLoading) {
      return () => {};
    }

    const controller = new AbortController();

    async function getFeaturedProducts() {
      try {
        setProducts({ data: {}, isLoading: true });

        const response = await fetch(
          `${API_BASE_URL}/documents/search?ref=${apiRef}&q=${encodeURIComponent(
            '[[at(document.type, "product")]]'
          )}&lang=en-us&pageSize=12&page=${currentPage}`,
          { signal: controller.signal }
        );
        const data = await response.json();

        setProducts({ data, isLoading: false });
      } catch (error) {
        setProducts({ data: {}, isLoading: true });
        console.error(error);
      }
    }

    getFeaturedProducts();

    return () => controller.abort();
  }, [apiRef, isApiMetadataLoading, currentPage]);

  return products;
};

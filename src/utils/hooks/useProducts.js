import { useState, useEffect } from "react";
import { API_BASE_URL } from "../constants";
import { useLatestAPI } from "./useLatestAPI";

export const useProducts = ({ currentPage, reqFilters }) => {
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

    let filters =
      reqFilters.length > 0
        ? encodeURIComponent(
            `[[at(document.type, "product")][any(my.product.category, ["${reqFilters.join(
              '","'
            )}"])]]`
          )
        : encodeURIComponent(`[[at(document.type, "product")]]`);

    async function getFeaturedProducts(queryParam) {
      try {
        setProducts({ data: {}, isLoading: true });

        const response = await fetch(
          // eslint-disable-next-line max-len
          `${API_BASE_URL}/documents/search?ref=${apiRef}&q=${queryParam}&lang=en-us&pageSize=12&page=${currentPage}`,
          { signal: controller.signal }
        );
        const data = await response.json();

        setProducts({ data, isLoading: false });
      } catch (error) {
        setProducts({ data: {}, isLoading: true });
        console.error(error);
      }
    }

    getFeaturedProducts(filters);

    return () => controller.abort();
  }, [apiRef, isApiMetadataLoading, currentPage, reqFilters]);

  return products;
};

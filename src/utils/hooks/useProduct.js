import { useState, useEffect } from "react";
import { API_BASE_URL } from "../constants";
import { useLatestAPI } from "./useLatestAPI";

export const useProduct = (productId) => {
  const { ref: apiRef, isLoading: isApiMetadataLoading } = useLatestAPI();
  const [products, setProduct] = useState({
    data: {},
    isLoading: true,
  });

  useEffect(() => {
    if (!apiRef || isApiMetadataLoading) {
      return () => {};
    }

    const controller = new AbortController();

    async function getProduct() {
      try {
        setProduct({ data: {}, isLoading: true });

        const response = await fetch(
          `${API_BASE_URL}/documents/search?ref=${apiRef}&q=${encodeURIComponent(
            `[[at(document.id, "${productId}")]]`
          )}&lang=en-us`,
          { signal: controller.signal }
        );
        const data = await response.json();

        setProduct({ data, isLoading: false });
      } catch (error) {
        setProduct({ data: {}, isLoading: true });
        console.error(error);
      }
    }

    getProduct();

    return () => controller.abort();
  }, [apiRef, isApiMetadataLoading, productId]);

  return products;
};

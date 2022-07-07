import { useState, useEffect } from "react";
import { API_BASE_URL } from "../constants";
import { useLatestAPI } from "./useLatestAPI";

export const useFeaturedCategories = () => {
  const { ref: apiRef, isLoading: isApiMetadataLoading } = useLatestAPI();
  const [featuredCategories, setFeaturedCategories] = useState({
    data: {},
    isLoading: true,
  });

  useEffect(() => {
    if (!apiRef || isApiMetadataLoading) {
      return () => {};
    }

    const controller = new AbortController();

    async function getFeaturedCategories() {
      try {
        setFeaturedCategories({ data: {}, isLoading: true });

        const response = await fetch(
          `${API_BASE_URL}/documents/search?ref=${apiRef}&q=${encodeURIComponent(
            '[[at(document.type, "category")]]'
          )}&lang=en-us&pageSize=30`,
          { signal: controller.signal }
        );
        const data = await response.json();

        setFeaturedCategories({ data, isLoading: false });
      } catch (error) {
        setFeaturedCategories({ data: {}, isLoading: true });
        console.error(error);
      }
    }

    getFeaturedCategories();

    return () => controller.abort();
  }, [apiRef, isApiMetadataLoading]);

  return featuredCategories;
};

import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import Card from "../../components/Card/Card";
import Category from "../../components/Category/Category";
import Slider from "../../components/Slider/Slider";
import { Loader } from "../../components/Loader.style";

import { Swiper } from "swiper/react/swiper-react";
import { Autoplay, Navigation, FreeMode } from "swiper";
import { SwiperSlide } from "swiper/react/swiper-react";

import "swiper/swiper.scss";
import "swiper/modules/free-mode/free-mode.scss";
import "swiper/modules/navigation/navigation.scss";

import { Button, Container, ProductsContainer, Title } from "./Home.style";
import { useFeaturedBanners } from "../../utils/hooks/useFeaturedBanners";
import { useFeaturedProducts } from "../../utils/hooks/useFeaturedProducts";
import { useFeaturedCategories } from "../../utils/hooks/useFeaturedCategories";
import { addToCart } from "../../utils/slices/cartSlice";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { data: banners, isLoading: bIsLoading } = useFeaturedBanners();
  const { data: products, isLoading: pIsLoading } = useFeaturedProducts();
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

  return (
    <Container>
      {!bIsLoading && !pIsLoading && !cIsLoading ? (
        <>
          <Slider banners={banners.results} />
          <Title>Categories</Title>
          <ProductsContainer>
            <Swiper
              modules={[Autoplay, FreeMode, Navigation]}
              slidesPerView={4}
              loop={true}
              spaceBetween={10}
              navigation={true}
              freeMode
              autoplay={false}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  navigation: {
                    enabled: false,
                  },
                  autoplay: {
                    delay: 3000,
                    pauseOnMouseEnter: true,
                  },
                },
                481: {
                  slidesPerView: 2,
                  navigation: {
                    enabled: false,
                  },
                  autoplay: {
                    delay: 3000,
                    pauseOnMouseEnter: true,
                  },
                },
                1024: {
                  slidesPerView: 3,
                  navigation: {
                    enabled: true,
                  },
                  autoplay: false,
                },
                1205: {
                  slidesPerView: 3,
                  navigation: {
                    enabled: true,
                  },
                  autoplay: false,
                },
              }}
            >
              {categories.results.map((category) => (
                <SwiperSlide key={category.id}>
                  <Category key={category.id} category={category} />
                </SwiperSlide>
              ))}
            </Swiper>
          </ProductsContainer>
          <Title>All products</Title>
          <ProductsContainer>
            {products.results.map((product) => (
              <Card
                key={product.id}
                product={product}
                handleViewDetails={handleViewDetails}
                handleAddToCart={handleAddToCart.bind(this, product)}
              />
            ))}
          </ProductsContainer>
          <ProductsContainer>
            <Button to="/products">View all products</Button>
          </ProductsContainer>
        </>
      ) : (
        <Loader />
      )}
    </Container>
  );
};

export default Home;

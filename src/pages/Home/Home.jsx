import React from "react";

import Button from "../../components/Button/Button";
import Card from "../../components/Card/Card";
import Category from "../../components/Category/Category";
import Slider from "../../components/Slider/Slider";

import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import { Navigation, Pagination } from "swiper";
import "swiper/swiper.scss";
import "swiper/modules/navigation/navigation.scss";
import "swiper/modules/pagination/pagination.scss";

import { Container, ProductsContainer, Title } from "./Home.style";

function Home({ categories, products, banners, stateHandler }) {
  function changePage(e) {
    e.preventDefault();

    stateHandler("products");
  }

  return (
    <Container>
      <Slider banners={banners} />
      <Title>Categories</Title>
      <ProductsContainer>
        <Swiper
          slidesPerView={4}
          spaceBetween={10}
          pagination={{
            type: "progressbar",
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            576: {
              slidesPerView: 2,
            },
            920: {
              slidesPerView: 4,
            },
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
        >
          {categories.map((category) => (
            <SwiperSlide key={category.id}>
              <Category key={category.id} category={category} />
            </SwiperSlide>
          ))}
        </Swiper>
        {/* {categories.map((category) => (
          <Category key={category.id} category={category} />
        ))} */}
      </ProductsContainer>
      <Title>All products</Title>
      <ProductsContainer>
        {products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </ProductsContainer>
      <ProductsContainer>
        <Button text="View all products" onClick={changePage} />
      </ProductsContainer>
    </Container>
  );
}

export default Home;

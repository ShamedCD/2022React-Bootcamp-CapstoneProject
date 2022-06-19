import React from "react";
import { Navigation, Pagination } from "swiper";
import { SwiperSlide } from "swiper/react/swiper-react";

import { Carousel, SliderItem } from "./Slider.style";

import "swiper/swiper.scss";
import "swiper/modules/pagination/pagination.scss";
import "swiper/modules/navigation/navigation.scss";

const Slider = ({ banners }) => {
  return (
    <Carousel
      modules={[Navigation, Pagination]}
      slidesPerView={1}
      loop={true}
      pagination={{ clickable: true }}
      spaceBetween={10}
      navigation
    >
      {banners.map((banner) => (
        <SwiperSlide key={banner.id}>
          <SliderItem
            key={banner.data.title}
            alt={banner.data}
            src={banner.data.main_image.url}
          />
        </SwiperSlide>
      ))}
    </Carousel>
  );
};

export default Slider;

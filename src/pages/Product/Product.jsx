import React, { useState } from "react";
import { useParams } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

import {
  Button,
  ButtonContainer,
  Container,
  TagsContainer,
  Tag,
  Row,
  Gallery,
  Title,
  Divider,
  Description,
  Specs,
  Table,
  THeader,
  TD,
  Counter,
} from "./Product.style";
import { Loader } from "../../components/Loader.style";

import { useProduct } from "../../utils/hooks/useProduct";

import { Navigation, FreeMode, Thumbs } from "swiper";
import { SwiperSlide } from "swiper/react/swiper-react";

import "swiper/swiper.scss";
import "swiper/modules/free-mode/free-mode.scss";
import "swiper/modules/navigation/navigation.scss";
import "swiper/modules/thumbs/thumbs.scss";

const Product = () => {
  const { idProduct } = useParams();
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const { data: product, isLoading } = useProduct(idProduct);

  const renderTableHeader = (specs) => {
    return specs.map((spec) => (
      <THeader key={spec.spec_name}>{spec.spec_name}</THeader>
    ));
  };

  const renderTableBody = (specs) => {
    return specs.map((spec) => <TD key={spec.spec_name}>{spec.spec_value}</TD>);
  };

  function getImageKey(url) {
    const key = url.match(/\w{8}-\w{4}-\w{4}-\w{4}-\w{12}/gs);
    return key;
  }

  return (
    <Container>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Row width="40%">
            <Gallery
              modules={[FreeMode, Navigation, Thumbs]}
              className="mainSwiper"
              freeMode
              loop={true}
              navigation={true}
              slidesPerView={1}
              spaceBetween={10}
              thumbs={{ swiper: thumbsSwiper }}
            >
              {product.results[0].data.images.map(({ image }) => (
                <SwiperSlide key={getImageKey(image.url)}>
                  <img src={image.url} alt={image.alt} />
                </SwiperSlide>
              ))}
            </Gallery>
            <Gallery
              freeMode={true}
              modules={[FreeMode, Navigation, Thumbs]}
              loop={true}
              onSwiper={setThumbsSwiper}
              slidesPerView={product.results[0].data.images.length}
              spaceBetween={10}
              watchSlidesProgress={true}
              className="childSwiper"
            >
              {product.results[0].data.images.map(({ image }) => (
                <SwiperSlide key={getImageKey(image.url)}>
                  <img src={image.url} alt={image.alt} />
                </SwiperSlide>
              ))}
            </Gallery>
          </Row>
          <Row width="60%">
            <Title>
              <sup className="extra-info">
                #{product.results[0].data.sku} -{" "}
                <span className="category">
                  {product.results[0].data.category.slug}
                </span>
              </sup>
              <h1>{product.results[0].data.name}</h1>
            </Title>
            <Divider />
            {product.results[0].tags.length > 0 ? (
              <TagsContainer>
                {product.results[0].tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </TagsContainer>
            ) : null}
            <Description>
              <p className="description">
                {product.results[0].data.short_description}
              </p>
            </Description>
            <Specs>
              <Table>
                <thead>
                  <tr>{renderTableHeader(product.results[0].data.specs)}</tr>
                </thead>
                <tbody>
                  <tr>{renderTableBody(product.results[0].data.specs)}</tr>
                </tbody>
              </Table>
            </Specs>
            <p className="price">${product.results[0].data.price} USD</p>
            <ButtonContainer>
              <Counter>
                <button className="counter-btn left">
                  <FontAwesomeIcon icon={faPlus} />
                </button>
                <input
                  type="number"
                  value={0}
                  onChange={(e) => {
                    console.log(e.target.value);
                  }}
                  className="counter-field"
                />
                <button className="counter-btn right">
                  <FontAwesomeIcon icon={faMinus} />
                </button>
              </Counter>
              <Button isCart={true}>Add to cart</Button>
            </ButtonContainer>
          </Row>
        </>
      )}
    </Container>
  );
};

export default Product;

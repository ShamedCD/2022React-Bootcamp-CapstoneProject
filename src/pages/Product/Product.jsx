import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { Navigation, FreeMode, Thumbs } from "swiper";
import { SwiperSlide } from "swiper/react/swiper-react";

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
import { addToCart } from "../../utils/slices/cartSlice";

import "swiper/swiper.scss";
import "swiper/modules/free-mode/free-mode.scss";
import "swiper/modules/navigation/navigation.scss";
import "swiper/modules/thumbs/thumbs.scss";

const Product = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [counter, setCounter] = useState(0);

  const { idProduct } = useParams();
  const dispatch = useDispatch();

  const { data: product, isLoading } = useProduct(idProduct);

  const handleAddToCart = (product, e) => {
    e.preventDefault();

    dispatch(addToCart({ product, counter }));
  };

  const getImageKey = (url) => {
    const key = url.match(/\w{8}-\w{4}-\w{4}-\w{4}-\w{12}/gs);
    return key;
  };

  const increase = () => {
    if (counter < product.results[0].data.stock) {
      setCounter((count) => count + 1);
    }
  };

  const decrease = () => {
    if (counter > 0) {
      setCounter((count) => count - 1);
    }
  };

  const renderTableBody = (specs) => {
    return specs.map((spec) => <TD key={spec.spec_name}>{spec.spec_value}</TD>);
  };

  const renderTableHeader = (specs) => {
    return specs.map((spec) => (
      <THeader key={spec.spec_name}>{spec.spec_name}</THeader>
    ));
  };

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
            <p className="stock">Stock: {product.results[0].data.stock}</p>
            <ButtonContainer>
              <Counter>
                <button
                  className="counter-btn left"
                  onClick={increase}
                  disabled={counter === product.results[0].data.stock}
                >
                  <FontAwesomeIcon icon={faPlus} />
                </button>
                <input
                  type="number"
                  value={counter}
                  onChange={(e) => {
                    if (e.target.value > 0) {
                      setCounter(e.target.value);
                    }
                  }}
                  className="counter-field"
                />
                <button className="counter-btn right" onClick={decrease}>
                  <FontAwesomeIcon icon={faMinus} />
                </button>
              </Counter>
              <Button
                isCart={true}
                disabled={
                  product.results[0].data.stock === 0 || counter === 0
                    ? true
                    : false
                }
                onClick={handleAddToCart.bind(this, product.results[0])}
              >
                Add to cart
              </Button>
            </ButtonContainer>
          </Row>
        </>
      )}
    </Container>
  );
};

export default Product;

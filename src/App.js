import React from "react";
import Global from "./global";
import { Route, Routes } from "react-router-dom";

import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

import Checkout from "./pages/Checkout/Checkout";
import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
import Products from "./pages/Products/Products";
import Search from "./pages/Search/Search";
import ShoppingCart from "./pages/ShoppingCart/ShoppingCart";

const App = () => {
  return (
    <>
      <Global />
      <Navbar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route
          path="/products?category={categorySlug}"
          element={<Products />}
        />
        <Route path="/product/:idProduct" element={<Product />} />
        <Route path="/search" element={<Search />} />
        <Route path="/cart" element={<ShoppingCart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;

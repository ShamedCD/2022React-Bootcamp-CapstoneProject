import React from "react";
import Global from "./global";
import { Route, Routes } from "react-router-dom";

import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Products from "./pages/Products/Products";

import Product from "./pages/Product/Product";
import Search from "./pages/Search/Search";

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
      </Routes>
      <Footer />
    </>
  );
};

export default App;

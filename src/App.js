import React, { useState } from "react";
import Global from "./global";

import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Products from "./pages/Products/Products";

import featuredProducts from "./mocks/en-us/featured-products.json";
import banners from "./mocks/en-us/featured-banners.json";
import categories from "./mocks/en-us/product-categories.json";

function App() {
  const [page, setPage] = useState("home");
  return (
    <>
      <Global />
      <Navbar stateHandler={setPage} />
      {page === "home" ? (
        <Home
          categories={categories.results}
          products={featuredProducts.results}
          banners={banners.results}
          stateHandler={setPage}
        />
      ) : (
        <Products />
      )}
      <Footer />
    </>
  );
}

export default App;

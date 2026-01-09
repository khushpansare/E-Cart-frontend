import React from "react";
import ComponentWrapper from "../../wrapper/ComponentWrapper";
import Products from "../product-pages/Products";
import Slider from "../product-pages/Slider";
// import Category from "./Category";

function HomePage() {
  return (
    <ComponentWrapper>
      <Slider />
      {/* <Category /> */}

      <h1 className="my-5">Trending Products</h1>
      <Products />
    </ComponentWrapper>
  );
}

export default HomePage;

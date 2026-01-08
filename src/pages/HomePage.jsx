import React from "react";
import ComponentWrapper from "../wrapper/ComponentWrapper";
import Products from "./product-pages/Products";
import Slider from "./product-pages/Slider";

function HomePage() {
  return (
    <ComponentWrapper>
      <Slider />
      <Products />
    </ComponentWrapper>
  );
}

export default HomePage;

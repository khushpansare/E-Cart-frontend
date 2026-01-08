import React from "react";
import ComponentWrapper from "../../wrapper/ComponentWrapper";
import Slider_Main_Page from "./Slider";

const productData = [
  {
    productName: "Universal Hoodie",
    productPrice: 550,
    productDiscount: 20,
    productQuantity: 10,
    productImg: "https://m.media-amazon.com/images/I/61h4E8YTfGL._SY879_.jpg",
  },

  {
    productName: "Adidas Sport shoes",
    productPrice: 1050,
    productDiscount: 15,
    productQuantity: 4,
    productImg: "https://m.media-amazon.com/images/I/612feZIBv7L._SY695_.jpg",
  },
  {
    productName: "Altras Trimmer-500sp",
    productPrice: 1100,
    productDiscount: 10,
    productQuantity: 5,
    productImg:
      "https://m.media-amazon.com/images/I/41vL3OaCnbL._SY300_SX300_QL70_FMwebp_.jpg",
  },
  {
    productName: "Dyazo Water Resistant Laptop Case",
    productPrice: 750,
    productDiscount: 5,
    productQuantity: 2,
    productImg: "https://m.media-amazon.com/images/I/81rRMwFG0+L._SX522_.jpg",
  },
  {
    productName:
      "teelbird SBA-7 7Wings ISI Certified Flip-Up Helmet for Men and Women",
    productPrice: 1680,
    productDiscount: 25,
    productQuantity: 5,
    productImg: "https://m.media-amazon.com/images/I/61PTzJ6JoPL._SX679_.jpg",
  },
  {
    productName: "JUST CORSECA JC Silver True Wireless Earbuds",
    productPrice: 850,
    productDiscount: 30,
    productQuantity: 10,
    productImg: "https://m.media-amazon.com/images/I/61-ix6IFNXL._SX522_.jpg",
  },
  {
    productName: "Long sleeved T-Shirt",
    productPrice: 550,
    productDiscount: 20,
    productQuantity: 10,
    productImg: "https://m.media-amazon.com/images/I/51VWHFAamcL._SX679_.jpg",
  },
  {
    productName: "Noise Twist Round dial Smart Watch with Bluetooth Calling",
    productPrice: 5550,
    productDiscount: 20,
    productQuantity: 10,
    productImg: "https://m.media-amazon.com/images/I/61-vRq2ulOL._SX679_.jpg",
  },
];

function Products() {
  return (
    <>
      <div className="product-container">
        {productData.map((val, i) => {
          return (
            <div className="card">
              <img src={val.productImg} alt="" />
              <h6>{val.productName}</h6>
              <h6>{val.productPrice}</h6>
              <button>Add to Cart</button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Products;

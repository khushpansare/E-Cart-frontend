import React, { useState } from "react";
import Model from "../../utiles/Model";

const productData = [
  {
    productName: "Universal Hoodie",
    productPrice: 550,
    productDiscount: 20,
    productQty: 10,
    productImg: "https://m.media-amazon.com/images/I/61h4E8YTfGL._SY879_.jpg",
  },

  {
    productName: "Adidas Sport shoes",
    productPrice: 1050,
    productDiscount: 15,
    productQty: 4,
    productImg: "https://m.media-amazon.com/images/I/612feZIBv7L._SY695_.jpg",
  },
  {
    productName: "Altras Trimmer-500sp",
    productPrice: 1100,
    productDiscount: 10,
    productQty: 5,
    productImg:
      "https://m.media-amazon.com/images/I/41vL3OaCnbL._SY300_SX300_QL70_FMwebp_.jpg",
  },
  {
    productName: "Dyazo Water Resistant Laptop Case",
    productPrice: 750,
    productDiscount: 5,
    productQty: 2,
    productImg: "https://m.media-amazon.com/images/I/81rRMwFG0+L._SX522_.jpg",
  },
  {
    productName:
      "teelbird SBA-7 7Wings ISI Certified Flip-Up Helmet for Men and Women",
    productPrice: 1680,
    productDiscount: 25,
    productQty: 5,
    productImg: "https://m.media-amazon.com/images/I/61PTzJ6JoPL._SX679_.jpg",
  },
  {
    productName: "JUST CORSECA JC Silver True Wireless Earbuds",
    productPrice: 850,
    productDiscount: 30,
    productQty: 10,
    productImg: "https://m.media-amazon.com/images/I/61-ix6IFNXL._SX522_.jpg",
  },
  {
    productName: "Long sleeved T-Shirt",
    productPrice: 550,
    productDiscount: 20,
    productQty: 10,
    productImg: "https://m.media-amazon.com/images/I/51VWHFAamcL._SX679_.jpg",
  },
  {
    productName: "Noise Twist Round dial Smart Watch with Bluetooth Calling",
    productPrice: 5550,
    productDiscount: 20,
    productQty: 10,
    productImg: "https://m.media-amazon.com/images/I/61-vRq2ulOL._SX679_.jpg",
  },
];

function Admin_Products() {
  const [product_form_data, setProduct_form_data] = useState({
    productName: "",
    productPrice: "",
    productImg: "",
    productQty: "",
    productDiscount: "",
  });

  const handleEditProduct = (val) => {
    setProduct_form_data({
      productName: val.productName,
      productPrice: val.productPrice,
      productImg: val.productImg,
      productQty: val.productQty,
      productDiscount: val.productDiscount,
    });
  };
  return (
    <>
      <div className="table-wrapper">
        <div className="d-flex flex-column flex-md-row align-items-center justify-content-between py-3 px-5 header">
          <h3>Product List</h3>
          <a data-bs-toggle="modal" data-bs-target="#exampleModal">
            <i className="bi bi-plus-circle"></i> Add New Product
          </a>
        </div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Image</th>
              <th>Discount</th>
              <th>Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {productData.map((val, i) => {
              return (
                <tr key={i}>
                  <td>{val.productName}</td>
                  <td>{val.productPrice}</td>
                  <td>
                    <img src={val.productImg} alt="" height={50} />
                  </td>
                  <td>{val.productDiscount}</td>
                  <td>{val.productQty}</td>
                  <td>
                    <button
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      onClick={(e) => handleEditProduct(val)}
                    >
                      <i className="bi bi-pencil-fill"></i>
                    </button>
                    <br />
                    <button>
                      <i className="bi bi-trash-fill"></i>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div
        className="modal fade"
        id="exampleModal"
        // tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <Model
          setProduct_form_data={setProduct_form_data}
          product_form_data={product_form_data}
        />
      </div>
    </>
  );
}

export default Admin_Products;

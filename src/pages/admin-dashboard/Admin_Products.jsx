import React from "react";

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

function Admin_Products() {
  return (
    <>
      <div className="table-wrapper">
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
                  <td>{val.productQuantity}</td>
                  <td>
                    <button>
                      <i class="bi bi-pencil-fill"></i>
                    </button>
                    <br />
                    <button>
                      <i class="bi bi-trash-fill"></i>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Admin_Products;

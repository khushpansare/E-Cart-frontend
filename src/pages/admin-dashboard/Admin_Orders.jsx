import React from "react";

const ordersData = [
  {
    coustomerName: "Rahul t",
    status: "Dispatched",
    totalAmount: 500,
    purchaseDate: "10-02-2026",
    product: {
      productName: "Universal Hoodie",
      productPrice: 550,
      productDiscount: 20,
      productQty: 2,
      productImg: "https://m.media-amazon.com/images/I/61h4E8YTfGL._SY879_.jpg",
    },
  },
  {
    coustomerName: "Asmita W",
    status: "Delivered",
    totalAmount: 500,
    purchaseDate: "15-05-2026",
    product: {
      productName: "Adidas Sport shoes",
      productPrice: 1050,
      productDiscount: 5,
      productQty: 4,
      productImg: "https://m.media-amazon.com/images/I/612feZIBv7L._SY695_.jpg",
    },
  },
  {
    coustomerName: "John lang",
    status: "Not Ready",
    totalAmount: 500,
    purchaseDate: "20-07-2026",
    product: {
      productName: "Altras Trimmer-500sp",
      productPrice: 1100,
      productDiscount: 1,
      productQty: 2,
      productImg:
        "https://m.media-amazon.com/images/I/41vL3OaCnbL._SY300_SX300_QL70_FMwebp_.jpg",
    },
  },
  {
    coustomerName: "Nandini J",
    status: "Delivered",
    totalAmount: 500,
    purchaseDate: "01-01-2026",
    product: {
      productName:
        "teelbird SBA-7 7Wings ISI Certified Flip-Up Helmet for Men and Women",
      productPrice: 1680,
      productDiscount: 25,
      productQty: 5,
      productImg: "https://m.media-amazon.com/images/I/61PTzJ6JoPL._SX679_.jpg",
    },
  },
];

function Admin_Orders() {
  return (
    <>
      {" "}
      <div className="table-wrapper">
        <div className="d-flex flex-column flex-md-row align-items-center justify-content-between py-3 px-5 header">
          <h3>Order</h3>
          {/* <a data-bs-toggle="modal" data-bs-target="#exampleModal">
            <i className="bi bi-plus-circle"></i> Add New Product
          </a> */}
        </div>
        <table>
          <thead>
            <tr>
              <th>Coustomer Name</th>
              <th>Product</th>
              <th>Quantity</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Purchase Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {ordersData.map((val, i) => {
              return (
                <tr key={i}>
                  <td>{val.coustomerName}</td>
                  <td>{val.product.productName}</td>
                  <td>{val.product.productQty}</td>
                  <td>{val.totalAmount}</td>
                  <td>{val.status}</td>
                  <td>{val.purchaseDate}</td>
                  <td>
                    <button>
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
    </>
  );
}

export default Admin_Orders;

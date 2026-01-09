import React from "react";

import { Formik } from "formik";
import * as Yup from "yup";

const product_validationSchema = Yup.object({
  productName: Yup.string()
    .max(30, "Must be 30 characters or less")
    .required("Required*"),
  productPrice: Yup.number("Contains only numbers").required("Required*"),
  productImg: Yup.mixed()
    .test("fileRequired", "Image is required", (value) => value instanceof File)
    .test("fileSize", "Image size must be less than 5MB", (value) => {
      if (!value) return true; // let required handle it
      return value.size <= 5 * 1024 * 1024;
    })
    .test("fileType", "Only JPG, PNG, WEBP images allowed", (value) => {
      if (!value) return true;
      return ["image/jpeg", "image/png", "image/webp"].includes(value.type);
    }),
  productQty: Yup.number("Contains only numbers").required("Required*"),
  productDiscount: Yup.number("Contains only numbers").required("Required*"),
});

function Add_New_Product({ setProduct_form_data, product_form_data }) {
  return (
    <>
      <div className="product-form">
        <Formik
          initialValues={{
            productName: "",
            productPrice: "",
            productImg: "",
            productQty: "",
            productDiscount: "",
          }}
          validationSchema={product_validationSchema}
          onSubmit={(values) => console.log(values)}
        >
          {({
            setFieldValue,
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <form onSubmit={handleSubmit}>
              <div className="my-3">
                <label htmlFor="productName">Product Name </label>
                <br />
                <input
                  type="text"
                  id="productName"
                  className="w-100"
                  name="productName"
                  value={product_form_data.productName}
                  onChange={(e) => {
                    handleChange(e);
                    setProduct_form_data({
                      ...product_form_data,
                      [e.target.name]: e.target.value,
                    });
                  }}
                  onBlur={handleBlur}
                />
                <div className="error-msg">
                  {errors.productName &&
                    touched.productName &&
                    errors.productName}
                </div>
              </div>

              <div className="my-3">
                <label htmlFor="productPrice">Product Price </label>
                <br />
                <input
                  type="text"
                  className="w-100"
                  id="productPrice"
                  name="productPrice"
                  value={product_form_data.productPrice}
                  onChange={(e) => {
                    handleChange(e);
                    setProduct_form_data({
                      ...product_form_data,
                      [e.target.name]: e.target.value,
                    });
                  }}
                  onBlur={handleBlur}
                />
                <div className="error-msg">
                  {errors.productPrice &&
                    touched.productPrice &&
                    errors.productPrice}
                </div>
              </div>

              <div className="my-3">
                <label htmlFor="productQty">Product Quantity: </label>
                <br />
                <input
                  type="text"
                  className="w-100"
                  id="productQty"
                  name="productQty"
                  value={product_form_data.productQty}
                  onChange={(e) => {
                    handleChange(e);
                    setProduct_form_data({
                      ...product_form_data,
                      [e.target.name]: e.target.value,
                    });
                  }}
                  onBlur={handleBlur}
                />
                <div className="error-msg">
                  {errors.productQty && touched.productQty && errors.productQty}
                </div>
              </div>
              <div className="my-3 text-left">
                <label htmlFor="productDiscount text-left">
                  Product Discount:{" "}
                </label>
                <br />
                <input
                  type="text"
                  className="w-100"
                  id="productDiscount"
                  name="productDiscount"
                  value={product_form_data.productDiscount}
                  onChange={(e) => {
                    handleChange(e);
                    setProduct_form_data({
                      ...product_form_data,
                      [e.target.name]: e.target.value,
                    });
                  }}
                  onBlur={handleBlur}
                />
                <div className="error-msg">
                  {errors.productDiscount &&
                    touched.productDiscount &&
                    errors.productDiscount}
                </div>
              </div>

              <div className="my-3">
                <label htmlFor="productQty">Product Image: </label>
                <br />
                <div
                  className="image-upload-box"
                  onClick={() => document.getElementById("productImg").click()}
                >
                  {product_form_data.productImg ? (
                    <img
                      src={URL.createObjectURL(product_form_data.productImg)}
                      alt="Preview"
                      className="preview-img"
                    />
                  ) : (
                    <span>Click to upload image</span>
                  )}
                </div>

                <input
                  type="file"
                  id="productImg"
                  name="productImg"
                  accept="image/*"
                  hidden
                  onChange={(e) => {
                    const file = e.currentTarget.files[0];

                    if (!file) return;

                    setProduct_form_data({
                      ...product_form_data,
                      productImg: file,
                    });

                    setFieldValue("productImg", file);
                    setFieldTouched("productImg", true);
                  }}
                />
                <div className="error-msg">
                  {errors.productImg && touched.productImg && errors.productImg}
                </div>
              </div>

              <div className="text-left">
                <button type="submit">Submit</button>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </>
  );
}

export default Add_New_Product;

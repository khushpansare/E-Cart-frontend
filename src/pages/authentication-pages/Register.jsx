import React, { useState } from "react";
import ComponentWrapper from "../../wrapper/ComponentWrapper";
import admin_register_page from "../../assets/admin-register-page.png";
import Alert from "../../utiles/Alert";

import { Formik } from "formik";
import * as Yup from "yup";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const admin_validationSchema = Yup.object({
  fullname: Yup.string()
    .max(30, "Must be 30 characters or less")
    .required("Required"),
  store_name: Yup.string()
    .max(30, "Must be 30 characters or less")
    .required("Required"),
  phone: Yup.string()
    .matches(/^[0-9]{10}$/, "Phone number must be exactly 10 digits")
    .required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),

  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Required"),
});

const user_validationSchema = Yup.object({
  fullname: Yup.string()
    .max(30, "Must be 30 characters or less")
    .required("Required"),
  phone: Yup.string()
    .matches(/^[0-9]{10}$/, "Phone number must be exactly 10 digits")
    .required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Required"),
});

const admin_initialValues = {
  fullname: "",
  store_name: "",
  email: "",
  phone: "",
  password: "",
};

const user_initialValues = {
  fullname: "",
  email: "",
  phone: "",
  password: "",
};

function Register() {
  const location = useLocation();
  const role = location.state.role;
  const [message, setmessage] = useState("");
  const navigate = useNavigate();

  const validationSchema =
    role === "admin" ? admin_validationSchema : user_validationSchema;

  const initialValues =
    role === "admin" ? admin_initialValues : user_initialValues;

  const handleFormSubmit = (values) => {
    axios
      .post("http://localhost:5000/admin/register", values)
      .then((res) => {
        console.log(res);
        setmessage(res.data);
        navigate("/admin/products");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      {message.length > 1 && (
        <Alert setmessage={setmessage} message={message} />
      )}
      <ComponentWrapper>
        <div className="auth-container">
          <div className="img">
            {role === "admin" ? (
              <h3>Let's build your store's success together.</h3>
            ) : (
              <h3>Welcome! Let’s make shopping easy.</h3>
            )}
            <img src={admin_register_page} alt="" />
          </div>
          <div className="form-content">
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={(values) => handleFormSubmit(values)}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
              }) => (
                <form onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="fullname">Full Name: </label>
                    <br />
                    <input
                      id="fullname"
                      type="text"
                      name="fullname"
                      value={values.fullname}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <div className="error-box">
                      {errors.fullname && touched.fullname && errors.fullname}
                    </div>
                  </div>

                  {role === "admin" && (
                    <div>
                      <label htmlFor="storename">Store Name: </label>
                      <br />
                      <input
                        id="storename"
                        type="text"
                        name="store_name"
                        value={values.store_name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      <div className="error-box">
                        {errors.store_name &&
                          touched.store_name &&
                          errors.store_name}
                      </div>
                    </div>
                  )}

                  <div>
                    <label htmlFor="email">E-Mail: </label>
                    <br />
                    <input
                      id="email"
                      type="text"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <div className="error-box">
                      {errors.email && touched.email && errors.email}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone">Phone No.: </label>
                    <br />
                    <input
                      id="phone"
                      type="text"
                      name="phone"
                      value={values.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <div className="error-box">
                      {errors.phone && touched.phone && errors.phone}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="Password">Password: </label>
                    <br />
                    <input
                      id="password"
                      type="text"
                      name="password"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <div className="error-box">
                      {errors.password && touched.password && errors.password}
                    </div>
                  </div>

                  <button type="submit">Submit</button>
                </form>
              )}
            </Formik>
          </div>
        </div>
      </ComponentWrapper>
    </>
  );
}

export default Register;

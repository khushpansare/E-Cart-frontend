import React from "react";
import { Route, Routes } from "react-router-dom";
import Welcome from "../pages/Welcome";
import Register from "../pages/authentication-pages/Register";
import Login from "../pages/authentication-pages/Login";
import Products from "../pages/product-pages/Products";
import UserLayout from "../layout/UserLayout";
import AdminLayout from "../layout/AdminLayout";
import HomePage from "../pages/HomePage";

function PageRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<HomePage />} />
        <Route path="/welcome" element={<Welcome />} />

        {/* Authentication Pages */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        {/* User Pages */}
        <Route path="/user" element={<UserLayout />} />

        {/* Admin Pages */}
        <Route path="/user" element={<AdminLayout />} />
      </Routes>
    </>
  );
}

export default PageRoutes;

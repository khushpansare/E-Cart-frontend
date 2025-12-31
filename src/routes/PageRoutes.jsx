import React from "react";
import { Route, Routes } from "react-router-dom";
import Welcome from "../pages/Welcome";
import UserRegister from "../pages/user-pages/userRegister";
import UserLogin from "../pages/user-pages/userLogin";
import AdminRegister from "../pages/admin-pages/adminRegister";
import AdminLogin from "../pages/admin-pages/adminLogin";
import Products from "../pages/product-pages/Products";
import UserLayout from "../layout/UserLayout";
import AdminLayout from "../layout/AdminLayout";

function PageRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/products" element={<Products />} />
        <Route path="/welcome" element={<Welcome />} />

        {/* Authentication Pages */}
        <Route path="/user-register" element={<UserRegister />} />
        <Route path="/user-login" element={<UserLogin />} />
        <Route path="/admin-register" element={<AdminRegister />} />
        <Route path="/admin-login" element={<AdminLogin />} />

        {/* User Pages */}
        <Route path="/user" element={<UserLayout />} />

        {/* Admin Pages */}
        <Route path="/user" element={<AdminLayout />} />
      </Routes>
    </>
  );
}

export default PageRoutes;

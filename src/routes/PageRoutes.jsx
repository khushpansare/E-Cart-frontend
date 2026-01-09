import React from "react";
import { Route, Routes, useRoutes } from "react-router-dom";
import Welcome from "../pages/Welcome";
import Register from "../pages/authentication-pages/Register";
import Login from "../pages/authentication-pages/Login";
import UserLayout from "../layout/UserLayout";
import AdminDashboardLayout from "../layout/AdminDashboardLayout";
import HomePage from "../pages/home/HomePage";
import Admin_Dashboard from "../pages/admin-dashboard/Admin_Dashboard";
import Admin_Products from "../pages/admin-dashboard/Admin_Products";
import Admin_Orders from "../pages/admin-dashboard/Admin_Orders";

function PageRoutes() {
  // return (
  //   <>
  //     <Routes>
  //       <Route path="/" element={<HomePage />} />
  //       <Route path="/products" element={<HomePage />} />
  //       <Route path="/welcome" element={<Welcome />} />

  //       {/* Authentication Pages */}
  //       <Route path="/register" element={<Register />} />
  //       <Route path="/login" element={<Login />} />

  //       {/* User Pages */}
  //       <Route path="/user-dashboard" element={<UserLayout />} />

  //       {/* Admin Pages */}
  //       <Route path="/admin" element={<AdminDashboardLayout />} />
  //     </Routes>
  //   </>
  // );

  return useRoutes([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/products",
      element: <HomePage />,
    },
    {
      path: "/welcome",
      element: <Welcome />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/user-dashboard",
      element: <UserLayout />,
    },
    {
      path: "/admin",
      element: <AdminDashboardLayout />,
      children: [
        { index: true, element: <Admin_Dashboard /> }, // /admin
        { path: "dashboard", element: <Admin_Dashboard /> }, // /admin/dashboard
        { path: "products", element: <Admin_Products /> }, // /admin/product
        { path: "orders", element: <Admin_Orders /> }, // /admin/product
      ],
    },
  ]);
}

export default PageRoutes;

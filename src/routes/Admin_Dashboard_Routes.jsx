import { useRoutes } from "react-router-dom";
import AdminDashboardLayout from "../layout/AdminDashboardLayout";
import Dashboard from "../pages/admin-dashboard/Dashboard";
import Products from "../pages/admin-dashboard/Products";
import Orders from "../pages/admin-dashboard/Orders";

const Admin_Dashboard_Routes = () => {
  return useRoutes([
    {
      path: "/admin",
      element: <AdminDashboardLayout />,
      children: [
        { index: true, element: <Dashboard /> }, // /admin
        { path: "dashboard", element: <Dashboard /> }, // /admin/dashboard
        { path: "products", element: <Products /> }, // /admin/product
        { path: "orders", element: <Orders /> }, // /admin/product
      ],
    },
  ]);
};

export default Admin_Dashboard_Routes;

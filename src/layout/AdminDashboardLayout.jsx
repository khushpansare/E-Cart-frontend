import React from "react";
import ComponentWrapper from "../wrapper/ComponentWrapper";
import AdminNav from "../dashboard/admin-dashboard/AdminNav";
import { Outlet } from "react-router-dom";

function AdminDashboardLayout() {
  return (
    <ComponentWrapper flag={1}>
      <div className="admin-dashboard">
        <AdminNav />
        <Outlet />
      </div>
    </ComponentWrapper>
  );
}

export default AdminDashboardLayout;

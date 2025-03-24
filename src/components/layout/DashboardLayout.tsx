import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div>
      <p>Dashboard</p>
      <Outlet />
    </div>
  );
};

export default DashboardLayout;

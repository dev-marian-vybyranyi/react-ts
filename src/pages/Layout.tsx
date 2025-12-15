import NavBat from "@/components/NavBat";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <NavBat />
      <Outlet />
    </>
  );
};

export default Layout;

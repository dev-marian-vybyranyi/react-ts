import NavBat from "@/components/NavBat";
import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <NavBat />
      <Box padding={5}>
        <Outlet />
      </Box>
    </>
  );
};

export default Layout;

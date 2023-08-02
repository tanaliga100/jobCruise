import { Box } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
// import homeImage from "../../public/hero.svg";
const RootLayout: React.FC = () => {
  //   const pathName = useLocation().pathname;
  return (
    <Box>
      <Outlet />
    </Box>
  );
};

export default RootLayout;

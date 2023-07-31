import { Box } from "@chakra-ui/react";
import React from "react";
import { Outlet } from "react-router-dom";
// import homeImage from "../../public/hero.svg";
const RootLayout: React.FC = () => {
  //   const pathName = useLocation().pathname;
  return (
    <Box w="100%">
      <Outlet />
    </Box>
  );
};

export default RootLayout;

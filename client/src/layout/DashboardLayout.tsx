import { Box, Flex, Square } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/shared/Sidebar";

const DashboardLayout = () => {
  return (
    <Box>
      {/* HEADER */}
      <Box p={{ base: "4", md: "10" }}>Header Here...</Box>

      {/* MAIN CONTENT */}
      <Flex direction={{ base: "column", md: "row" }}>
        {/* SIDEBAR */}
        <Square
          bg="white"
          size={{ base: "100%", md: "200px" }}
          minHeight="100vh"
        >
          <Sidebar />
        </Square>

        {/* MAIN AREA */}
        <Box flex="1" bg="teal.300" minHeight="100vh">
          <Outlet />
        </Box>
      </Flex>
    </Box>
  );
};

export default DashboardLayout;

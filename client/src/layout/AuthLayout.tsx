import { Box, Container, Flex } from "@chakra-ui/react";
import React from "react";
import { Outlet } from "react-router-dom";
// import homeImage from "../../public/hero.svg";
import { default as Nav } from "../components/screens/Nav";
const AuthLayout: React.FC = () => {
  //   const pathName = useLocation().pathname;
  return (
    <Box w="100%">
      <Nav />
      {/* ENTIRETY OF THE PAGE */}
      <Container maxW="container.sm" centerContent>
        <Flex gap={10}>
          {/* <img src={homeImage} /> */}
          <Outlet />
        </Flex>
      </Container>
    </Box>
  );
};

export default AuthLayout;

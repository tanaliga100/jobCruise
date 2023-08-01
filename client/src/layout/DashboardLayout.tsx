// import { Box, Flex, Heading, IconButton } from '@chakra-ui/react';
// import { Outlet } from "react-router-dom";
// import Sidebar from "../components/shared/Sidebar";

// interface User {
//   name: string;
// }

// const DashboardLayout = () => {
//   const user: User = {
//     name: "Jordan100",
//   };
//   return (
//     <Box>
//       {/* HEADER */}
//       <Box p={{ base: "4", md: "10" }} color="teal.500">
//         <Heading as="h6" size="md">
//           {user.name}
//         </Heading>
//       </Box>
//       {/* <Nav user={user} /> */}
//       {/* MAIN CONTENT */}

//       <Flex direction={{ base: "column", md: "row" }}>
//         {/* SIDEBAR */}
//         <Box
//           py={5}
//           // bg="white"
//           width={{ base: "100%", md: "200px" }}
//           minHeight="100vh"
//         >
//           <Heading as="h2" size="md">
//             <Sidebar />
//           </Heading>
//         </Box>

//         {/* MAIN AREA */}
//         <Box flex="1" bg="grey.400" minHeight="100vh">
//           <Outlet />
//         </Box>
//       </Flex>
//     </Box>
//   );
// };

// export default DashboardLayout;

import { HamburgerIcon } from "@chakra-ui/icons"; // Import the HamburgerIcon
import {
     Box,
     Drawer,
     DrawerBody,
     DrawerCloseButton,
     DrawerContent,
     DrawerOverlay,
     Flex,
     Heading,
     IconButton,
     useDisclosure,
} from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Logo from "../components/screens/Logo";
import Sidebar from "../components/shared/Sidebar";

interface User {
  name: string;
}

const DashboardLayout = () => {
  const user: User = {
    name: "Jordan100",
  };

  // Initialize useDisclosure hook
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box>
      {/* HEADER */}
      <Flex
        p={{ base: "4", md: "10" }}
        color="teal.500"
        flex={1}
        justify="space-between"
        align="center"
        ml={{ base: "10px", md: "0" }}
        mr={{ base: "10px", md: "0" }}
      >
        <IconButton aria-label="icon" size="xs" icon={<Logo />} />
        <Heading as="h6" size="md">
          {user.name}
        </Heading>
      </Flex>
      {/* Hamburger Icon */}
      <IconButton
        display={{ base: "block", md: "none" }}
        aria-label="Open Sidebar"
        icon={<HamburgerIcon />}
        onClick={onOpen}
        position="fixed"
        top={4}
        right={4}
        zIndex={999}
      />
      {/* Responsive Drawer */}
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody>
            {/* Sidebar Component */}
            <Sidebar />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      {/* MAIN CONTENT */}
      <Flex direction={{ base: "column", md: "row" }}>
        {/* SIDEBAR (Hidden on Mobile) */}
        <Box
          py={5}
          display={{ base: "none", md: "block" }}
          // bg="white"
          width={{ base: "100%", md: "200px" }}
          minHeight="100vh"
        >
          <Heading as="h2" size="md">
            <Sidebar />
          </Heading>
        </Box>

        {/* MAIN AREA */}
        <Box flex="1" bg="grey.400" minHeight="100vh">
          <Outlet />
        </Box>
      </Flex>
    </Box>
  );
};

export default DashboardLayout;

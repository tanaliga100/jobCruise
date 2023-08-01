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
  Select,
  Stack,
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
        boxShadow="0 2px 10px rgba(0, 0, 0, 0.3)"
        p={{ base: "2", md: "10" }}
        color="teal.500"
        flex={1}
        justify="space-between"
        align="center"
        ml={{ base: "0", md: "0" }}
        mr={{ base: "0", md: "0" }}
      >
        <IconButton
          aria-label="icon"
          size="sm"
          display={{ base: "none", md: "block" }}
          icon={<Logo />}
        />
        <Flex gap="10" justify="space-between" align="center">
          {/* <Heading as="h6" size="md" display={{ base: "none", md: "block" }}>
            {user.name}
          </Heading> */}
          <Stack>
            <Select width="36" pr="10" variant="filled" placeholder={user.name}>
              <option value="logout">Logout</option>
            </Select>
          </Stack>
        </Flex>
      </Flex>
      {/* Hamburger Icon */}
      <IconButton
        display={{ base: "block", md: "none" }}
        aria-label="Open Sidebar"
        icon={<HamburgerIcon />}
        onClick={onOpen}
        position="fixed"
        top={{ base: 2, sm: 2, md: 0 }}
        right={4}
        zIndex={999}
      />
      {/* Responsive Drawer */}
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody pt={{ base: 0, sm: 10 }}>
            {/* Sidebar Component */}
            <Sidebar />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      {/* MAIN CONTENT */}
      <Flex direction={{ base: "column", md: "row" }}>
        {/* SIDEBAR (Hidden on Mobile) */}
        <Box
          // pt={5}
          display={{ base: "none", md: "block" }}
          bg="whiteAlpha.900"
          width={{ base: "100%", md: "200px" }}
          minHeight="100vh"
          boxShadow="0px 15px 20px rgba(0, 0, 0, .3)"
        >
          <Heading as="h6" size="md" fontWeight="hairline" color="teal.500">
            <Sidebar />
          </Heading>
        </Box>

        {/* MAIN AREA */}
        <Box flex="1" bg="grey.400" minHeight="100vh" p={5}>
          <Outlet />
        </Box>
      </Flex>
    </Box>
  );
};
export default DashboardLayout;

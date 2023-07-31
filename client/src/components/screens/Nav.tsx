import { Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import logo from "../../../public/logo.svg";
const Nav = () => {
  return (
    <Box p={3} _hover={{ cursor: "pointer" }} bg="blackAlpha.900">
      <Link to="/">
        <img src={logo} />
      </Link>
    </Box>
  );
};
export default Nav;

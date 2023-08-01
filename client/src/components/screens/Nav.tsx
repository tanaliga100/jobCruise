import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";

interface IProps {
  user?: { name: string };
}
const Nav: React.FC<IProps> = (props: IProps) => {
  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      px={12}
      _hover={{ cursor: "pointer" }}
      //  bg="blackAlpha.900"
      direction="row"
    >
      <Link to="/">
        <img src={logo} alt="Logo" />{" "}
        {/* Add an alt attribute for the <img> tag */}
      </Link>
      <Text
        as="h1"
        fontSize="xl"
        fontWeight="extrabold"
        color="whiteAlpha.600"
        ml={3}
        pr={5}
      >
        {props?.user?.name}
      </Text>{" "}
      {/* Use margin-left (ml) for spacing */}
    </Flex>
  );
};

export default Nav;

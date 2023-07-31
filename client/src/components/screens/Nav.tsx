import { Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <Heading
      as="h1"
      size="lg"
      noOfLines={1}
      color="antiquewhite"
      p={10}
      fontWeight="extrabold"
      bg="teal.500"
    >
      <Link to="/">JOBCRUISE</Link>
    </Heading>
  );
};
export default Nav;

import {
  Button,
  Center,
  Container,
  Flex,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import svgIcon from "../../public/hero.svg";
const LandingPage = () => {
  return (
    //     <Center w="100%" h="100%" pt="32">
    //       {/* LEFT */}
    //       <Container w="50vw">
    //         <Stack pb="10">
    //           <Heading as="h1" size="3xl" fontWeight="extrabold">
    //             Job
    //             <Text color="teal.400">Tracking</Text>
    //             App
    //           </Heading>
    //         </Stack>
    //         <Heading fontSize="medium" fontWeight="thin">
    //           a web application designed to help users efficiently track and manage
    //           their job applications throughout the entire job search process. The
    //           app provides a user-friendly interface to keep a record of all job
    //           applications, interviews, and relevant details, ensuring users stay
    //           organized and never miss important opportunities.
    //         </Heading>
    //         <Flex gap={3} pt="10">
    //           <Button colorScheme="teal" size="lg">
    //             <Link to="register"> Register</Link>
    //           </Button>
    //           <Button colorScheme="teal" size="lg">
    //             <Link to="login">Login</Link>
    //           </Button>
    //         </Flex>
    //       </Container>
    //       <Container>
    //         <img src={svgIcon} />
    //       </Container>
    //        </Center>
    <Center
      w="100%"
      minH="100vh"
      py={{ base: "8", md: "16" }}
      px={{ base: "4", md: "8" }}
    >
      {/* LEFT */}
      <Stack spacing={{ base: "4", md: "8" }} w={{ base: "100%", md: "50vw" }}>
        <Heading as="h1" size="3xl" fontWeight="extrabold">
          Job
          <Text color="teal.400">Tracking</Text>
          App
        </Heading>
        <Text fontSize={{ base: "sm", md: "md", lg: "2xl" }} fontWeight="thin">
          A web application designed to help users efficiently track and manage
          their job applications throughout the entire job search process. The
          app provides a user-friendly interface to keep a record of all job
          applications, interviews, and relevant details, ensuring users stay
          organized and never miss important opportunities.
        </Text>
        <Flex direction={{ base: "column", md: "row" }} gap={3} pt="6">
          <Button colorScheme="teal" size="lg">
            <Link to="register"> Register</Link>
          </Button>
          <Button colorScheme="teal" size="lg">
            <Link to="login">Login</Link>
          </Button>
        </Flex>
      </Stack>

      {/* RIGHT */}
      <Container display={{ base: "none", md: "block" }}>
        <img src={svgIcon} alt="Job Tracking App" />
      </Container>
    </Center>
  );
};

export default LandingPage;

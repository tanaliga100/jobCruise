import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";

const Register: React.FC = () => {
  return (
    <Box>
      <Nav />
      <Container py="10">
        <Heading mb="3" color="teal.400">
          Register
        </Heading>
        <form>
          <FormControl>
            <FormLabel>First Name</FormLabel>
            <Input type="text" />
            <FormLabel>Last Name</FormLabel>
            <Input type="text" />
            <FormLabel>Location</FormLabel>
            <Input type="text" />
            <FormLabel>Email</FormLabel>
            <Input type="email" />
            <FormLabel>Password</FormLabel>
            <Input type="password" />
          </FormControl>
          <Button mt={2} type="submit" bg="teal.500" color="white">
            Submit
          </Button>
        </form>
        <Flex py="5" gap={6}>
          <Text fontSize={"lg"}>Already have an account ?</Text>
          <Button size="xs">
            <Link to="/login">Login</Link>
          </Button>
        </Flex>
      </Container>
    </Box>
  );
};
export default Register;

// const Wrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 1rem;
//   padding: 3rem;
//   box-shadow: 0 0 5px rgba(0, 0, 0, 0.2); /* Add the box shadow here */

//   .title {
//     border-bottom: 0.1rem solid black;
//     color: black;
//     padding: 1rem;
//     border-radius: 2px;
//     margin-bottom: 1rem;
//     font-size: 2rem;
//     font-weight: 900;
//   }

//   a {
//     text-decoration: underline;
//     background-color: none;
//   }

//   form {
//     display: flex;
//     flex-direction: column;
//     gap: 1rem;

//     .submit {
//       margin: 1rem;
//       width: 60%;
//       margin: 0 auto;
//       background-color: orange;
//       padding: 0.5rem;
//     }
//   }
// `;

//  <FormRow
//           type="text"
//           name="firstName"
//           // defaulValue="jordan100"
//           labelText="First Name"
//           placeholder="your first name..."
//         />
//         <FormRow
//           type="text"
//           name="lastName"
//           // defaulValue="tanaliga100"
//           labelText="Last Name"
//           placeholder="your last name..."
//         />{" "}
//         <FormRow
//           type="text"
//           name="location"
//           // defaulValue="Manila, Philippines"
//           labelText="Location"
//           placeholder="your location..."
//         />{" "}
//         <FormRow
//           type="email"
//           name="email"
//           // defaulValue="jordan@mail.com"
//           labelText="Email"
//           placeholder="your email..."
//         />{" "}
//         <FormRow
//           type="password"
//           name="password"
//           // defaulValue="secret"
//           labelText="Password"
//           placeholder="your password.."
//         />

{
  /* <form>
        <div>
          <label htmlFor="name">First Name:</label>
          <input type="text" id="name" name="firstName" required />
        </div>
        <div>
          <label htmlFor="name">Last Name:</label>
          <input type="text" id="name" name="lastName" required />
        </div>
        <div>
          <label htmlFor="name">Location:</label>
          <input type="text" id="name" name="location" required />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button className="submit" type="submit">
          Submit
        </button>
      </form> */
}

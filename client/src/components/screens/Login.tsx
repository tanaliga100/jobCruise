import {
  Button,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Nav from "./Nav";

const Login = () => {
  return (
    <>
      <Nav />
      <Container py="10">
        <Heading py="3" color="teal.400">
          Login{" "}
        </Heading>
        <form>
          <FormControl>
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
          <Text fontSize={"lg"}>Dont have an account?</Text>
          <Button size="xs">
            <Link to="/register">Register</Link>
          </Button>
        </Flex>
        <Button bg="green.300" my={4} color="white">
          Explore the App
        </Button>
      </Container>
    </>
  );
};
export default Login;
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

// <form>
//   <FormRow
//     type="email"
//     name="email"
//     // defaulValue="jordan@mail.com"
//     placeholder="your email..."
//     labelText="Email"
//   />{" "}
//   <FormRow
//     type="password"
//     name="password"
//     // defaulValue="secret"
//     placeholder="your password..."
//     labelText="Password"
//   />
//   <button className="submit" type="submit">
//     Submit
//   </button>
// </form>;

{
  /* <form>
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

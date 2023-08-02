import { Box, Button, Typography } from "@mui/material";
import { Form, Link } from "react-router-dom";
import FormRow from "../shared/FormRow";

const Login = () => {
  return (
    <Box>
      <Form>
        {/* <FormControl>
            <FormLabel>Email</FormLabel>
            <Input type="email" required />
            <FormLabel>Password</FormLabel>
            <Input type="password" required />
          </FormControl> */}
        <FormRow
          labelText="Email"
          name="Email"
          type="email"
          placeholder="Enter Email"
        />
        <FormRow
          labelText="Password"
          name="Password"
          type="password"
          placeholder="Enter Password"
        />
        <Button variant="contained" sx={{ m: "1rem" }} color="info">
          Submit
        </Button>
        <Typography>
          Already have an account ?
          <Link to="/register" className="link">
            Register
          </Link>
        </Typography>
      </Form>
    </Box>
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

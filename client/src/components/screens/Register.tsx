import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { Form, Link } from "react-router-dom";
import FormRow from "../shared/FormRow";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function registerAction({ request }: any) {
  //   // eslint-disable-next-line prefer-const
  const formdata = await request.formData();

  //   // eslint-disable-next-line prefer-const
  //   let submission: { [key: string]: string } = {};
  //   for (const [key, value] of [...formdata.entries()]) {
  //     submission[key] = value;
  //   }
  //   console.log(submission);
  //   const data = Object.fromEntries(await request.formData());
  const toSubmit = {
    first: await formdata.get("firstName"),
    second: await formdata.get("lastName"),
    email: await formdata.get("email"),
    password: await formdata.get("password"),
  };

  console.log("gathered", formdata);

  return null;
}

const Register: React.FC = () => {
  return (
    <Box>
      <Form method="post">
        <FormRow
          labelText="First Name"
          name="firstName"
          type="text"
          placeholder="Enter First Name"
          // defaulValue="testFirstName"
        />
        <FormRow
          labelText="Last Name"
          name="lastName"
          type="text"
          placeholder="Enter Last Name"
          // defaulValue="testLastName"
        />

        <FormRow
          labelText="Email"
          name="email"
          type="email"
          placeholder="Enter Email"
          // defaulValue="test@mail.com"
        />
        <FormRow
          labelText="Password"
          name="password"
          type="password"
          placeholder="Enter Password"
          // defaulValue="secret"
        />
        <Button
          type="submit"
          variant="contained"
          sx={{ m: "1rem" }}
          color="info"
        >
          Submit
        </Button>
        <Typography>
          Already have an account ?
          <Link to="/" className="link">
            Login
          </Link>
        </Typography>
      </Form>
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

import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Register: React.FC = () => {
  return (
    <Wrapper>
      <h1>Register Page</h1>
      <form>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />
        </div>
        <button type="submit">Submit</button>
      </form>
      Already have an account ?
      <div className="link">
        <Link to="/login">Login</Link>
      </div>
    </Wrapper>
  );
};
export default Register;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 3rem;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2); /* Add the box shadow here */
  h1 {
    border-bottom: 0.1rem solid black;
    color: black;
    padding: 1rem;
    border-radius: 2px;
    margin-bottom: 1rem;
  }
  .link {
    background-color: black;
    color: white;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;

import { Link } from "react-router-dom";
import styled from "styled-components";

const Login = () => {
  return (
    <Wrapper>
      <h1>Login Page</h1>
      <form>
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
      Dont have an account ?
      <div className="link">
        <Link to="/register">Register</Link>
      </div>
    </Wrapper>
  );
};
export default Login;
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

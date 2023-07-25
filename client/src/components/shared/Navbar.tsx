import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Navbar: React.FC = () => {
  return (
    <Wrapper>
      <Link to="/">
        <h1>jobCruise</h1>
      </Link>
      <section className="link">
        <Link to="/register"> To Register</Link>
        <Link to="/login"> To Login</Link>
      </section>
    </Wrapper>
  );
};
const Wrapper = styled.nav`
  height: 100px;
  background-color: black;
  color: whitesmoke;
  justify-content: space-between;
  display: flex;
  flex-grow: 1;
  padding: 0 2rem;
  align-items: center;
  h1 {
    font-size: 2rem;
    font-weight: 1rem;
  }
  .link {
    display: flex;
    padding-right: 15rem;
    gap: 1rem;
  }
`;

export default Navbar;

import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const Navbar: React.FC = () => {
  const location = useLocation();
  return (
    <Wrapper>
      <Link to="/">
        <h1>JOBCRUISE</h1>
      </Link>
      {location.pathname === "/register" && (
        <section className="link">
          <Link to="/login"> To Login </Link>
        </section>
      )}
      {location.pathname === "/login" && (
        <section className="link">
          <Link to="/register"> To Register</Link>
        </section>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  height: 100px;
  color: orangered;
  justify-content: space-between;
  display: flex;
  flex-grow: 1;
  padding: 0 2rem;
  align-items: center;
  h1 {
    font-size: 1.8rem;
    font-weight: 700;
  }
  .link {
    display: flex;
    padding-right: 15rem;
    gap: 1rem;
  }

  @media screen and (max-width: 500px) {
    .link {
      display: none;
    }
  }
`;

export default Navbar;

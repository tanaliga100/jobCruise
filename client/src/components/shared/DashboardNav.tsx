import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const DashboardNav: React.FC = () => {
  return (
    <Wrapper>
      <Link to="/">
        <h1>JOBCRUISE</h1>
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  max-height: 5rem;
  background-color: white;
  color: black;
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

export default DashboardNav;

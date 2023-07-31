import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import logo from "../../../public/vite.svg";
const Sidebar: React.FC = () => {
  const RenderLinks = links.map((link: ILinks) => {
    return (
      <NavLink relative="route" key={link.id} to={link.path}>
        {link.linkTitle}
      </NavLink>
    );
  });

  return (
    <Wrapper>
      <img src={logo} width={100} height={100} />
      <Links>{RenderLinks}</Links>
    </Wrapper>
  );
};

export default Sidebar;

const Wrapper = styled.div`
  min-height: 100vh;
  min-width: 10vw;
  background-color: white;
  color: black;

  img {
    text-align: center;
    place-items: center;
    margin: 0 auto;
  }
`;

const Links = styled.div`
  margin-top: 2rem;
  display: grid;
  padding: 1rem 0.3rem;
  font-size: 1.5rem;
  font-weight: 500;
  gap: 2rem;
  text-align: center;
`;

interface ILinks {
  id: number;
  linkTitle: string;
  path: string;
}
const links: ILinks[] = [
  { id: 1, linkTitle: "Dashboard", path: "/" },
  { id: 2, linkTitle: "All Jobs", path: "alljobs" },
  { id: 3, linkTitle: "Add Job Job", path: "addJob" },
  { id: 4, linkTitle: "Delete Job", path: "deletejob" },
  { id: 5, linkTitle: "Edit Job", path: "edijob" },
  { id: 6, linkTitle: "Profile", path: "/profile" },
];

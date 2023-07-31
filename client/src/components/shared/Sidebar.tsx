import { Stack } from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";
const Sidebar: React.FC = () => {
  const RenderLinks = links.map((link: ILinks) => {
    return (
      <NavLink end key={link.id} to={link.path}>
        {link.linkTitle}
      </NavLink>
    );
  });

  return <Stack>{RenderLinks}</Stack>;
};

export default Sidebar;

interface ILinks {
  id: number;
  linkTitle: string;
  path: string;
}
const links: ILinks[] = [
  { id: 1, linkTitle: "Dashboard", path: "dashboard" },
  { id: 2, linkTitle: "All Jobs", path: "alljobs" },
  { id: 3, linkTitle: "Add Job", path: "addJob" },
  { id: 5, linkTitle: "Edit Job", path: "edijob" },
  { id: 6, linkTitle: "Profile", path: "profile" },
];

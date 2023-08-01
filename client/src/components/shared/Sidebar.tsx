import { IconButton, Stack } from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";
import { ILinks, links } from "../../utils/constants";
const Sidebar: React.FC = () => {
  return (
    <Stack gap={5} pt={5}>
      {links.map((link: ILinks) => {
        const { icon, id, linkTitle, path } = link;
        return (
          <NavLink
            style={({ isActive }) => {
              return {
                paddingLeft: "1rem",
                color: isActive ? "orange" : "",
                fontWeight: isActive ? "bold" : "",
                //  background: isActive ? "#b5d3ff" : "",
                //  textDecoration: isActive ? "underline" : "",
              };
            }}
            end
            to={path}
            key={id}
          >
            <IconButton
              size="lg"
              variant="unstyled"
              aria-label="icons"
              icon={icon}
            />

            {linkTitle}
          </NavLink>
        );
      })}
    </Stack>
  );
};

export default Sidebar;

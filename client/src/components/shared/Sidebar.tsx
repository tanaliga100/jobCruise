import { Box, Grid, IconButton, Typography } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import { ILinks, links } from "../../utils/constants";
const Sidebar: React.FC = () => {
  return (
    <Box>
      {links.map((link: ILinks) => {
        const { icon, id, linkTitle, path } = link;
        return (
          <NavLink
            style={({ isActive }) => {
              return {
                padding: "1rem",
                color: isActive ? "orange" : "teal",
                textDecoration: isActive ? "none" : "none",
              };
            }}
            end
            to={path}
            key={id}
          >
            <Grid
              container
              sx={{
                alignItems: "center",
                justifyContent: "space-evenly",
              }}
            >
              <Grid item xs={2}>
                <IconButton size="large">{icon}</IconButton>
              </Grid>
              <Grid item xs={6}>
                <Typography
                  variant="h6"
                  fontWeight={900}
                  sx={{ fontWeight: "1rem" }}
                >
                  {linkTitle}
                </Typography>
              </Grid>
            </Grid>
          </NavLink>
        );
      })}
    </Box>
  );
};

export default Sidebar;

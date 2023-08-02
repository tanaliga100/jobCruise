import { Box } from "@mui/material";
import React from "react";
import navLogo from "../../assets/logo.svg";
const Nav: React.FC = () => {
  return (
    <Box
      bgcolor="white"
      color="black "
      p={2}
      boxShadow="0 0 5px 1px   rgba(0,0,0, 0.3)"
    >
      <img src={navLogo} alt="logo" />
    </Box>
  );
};

export default Nav;

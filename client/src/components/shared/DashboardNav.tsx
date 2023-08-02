import { Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const DashboardNav: React.FC = () => {
  return (
    <Box>
      <Link to="/">
        <h1>JOBCRUISE</h1>
      </Link>
    </Box>
  );
};

export default DashboardNav;

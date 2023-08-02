import { Box } from "@mui/material";
import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar: React.FC = () => {
  const location = useLocation();
  return (
    <Box>
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
    </Box>
  );
};

export default Navbar;

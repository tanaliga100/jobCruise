import { Box, Grid, Stack } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../components/screens/Nav";
import Sidebar from "../components/shared/Sidebar";

const DashboardLayout = () => {
  // Initialize useDisclosure hook

  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const user: { name: string } = {
    name: "jordan100",
  };

  return (
    <Box>
      <Stack sx={{ position: "static" }}>
        <Nav
          user={user}
          onOpen={handleClickOpen}
          onClose={handleClose}
          open={open}
        />
      </Stack>
      <Grid container>
        <Grid
          item
          xs={2}
          height="100vh"
          bgcolor="white"
          boxShadow="1px 3px 6px  rgba(0, 0, 0, 0.3)"
        >
          <Sidebar />
        </Grid>
        <Grid item xs={10} p={3}>
          <Outlet />
        </Grid>
      </Grid>
    </Box>
  );
};
export default DashboardLayout;

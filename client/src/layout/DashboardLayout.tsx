import { Box, Grid } from "@mui/material";
import { Outlet } from "react-router-dom";
import Nav from "../components/screens/Nav";
import Sidebar from "../components/shared/Sidebar";

const DashboardLayout = () => {
  // Initialize useDisclosure hook

  return (
    <Box>
      <Nav />
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

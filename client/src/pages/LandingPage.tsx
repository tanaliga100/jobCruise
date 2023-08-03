import { Grid, Typography } from "@mui/material";
import { Link, Outlet } from "react-router-dom";
import homeImage from "../assets/hero.svg";
const LandingPage = () => {
  return (
    <Grid
      gap={10}
      container
      textAlign="center"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <Grid item xs={4}>
        <img src={homeImage} alt="landing-image" />
        <Typography variant="h3" component="figcaption" fontWeight={800} p={2}>
          Job
          <Typography
            variant="h3"
            component="code"
            px={2}
            fontWeight={900}
            color="#0288d1;"
          >
            Tracking
          </Typography>
          App
        </Typography>
        <Typography variant="body2" fontWeight={900} pb={3}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis rem
          quod dolores laboriosam aut. Commodi, maxime autem consequuntur, non
          doloribus laboriosam nam quos quis obcaecati reprehenderit, quaerat
          veritatis. Optio nam quae quos blanditiis, dolor sapiente voluptates?
          Accusamus explicabo odio, eius sed assumenda ad ratione quidem
        </Typography>
        <Link to="/dashboard" className="link-explore">
          Explore
        </Link>
      </Grid>
      <Grid item xs={2}>
        <Outlet />
      </Grid>
    </Grid>
  );
};

export default LandingPage;

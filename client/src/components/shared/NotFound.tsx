import { Box, Button, Typography } from "@mui/material";
import { Link, useRouteError } from "react-router-dom";
interface IError {
  data: string;
  status: number;
  statusText: string;
}

const NotFoundPage = () => {
  const error = useRouteError() as IError;
  console.log("ERROR", error);

  return (
    <Box textAlign="center" width="70%" mx="auto" p={5}>
      <Typography color="red" fontSize={50} fontWeight={900} p={3}>
        {error.statusText} : {error.status}
      </Typography>
      <Typography p={5} fontSize={20}>
        {error.data}
      </Typography>
      <Button variant="contained" color="success" sx={{ color: "white" }}>
        <Link to="/">Go Back</Link>
      </Button>
    </Box>
  );
};

export default NotFoundPage;

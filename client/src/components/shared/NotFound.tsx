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
    <Box>
      <Typography p={3}>
        {error.statusText} : {error.status}
      </Typography>
      <Typography>{error.data}</Typography>
      <Button>
        <Link to="/">Go Back</Link>
      </Button>
    </Box>
  );
};

export default NotFoundPage;

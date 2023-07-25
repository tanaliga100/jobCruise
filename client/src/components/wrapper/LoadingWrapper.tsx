import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import React from "react";

interface IProps {
  isLoading?: boolean;
  text?: string;
}

export const LoadingWrapper: React.FC<IProps> = (props) => {
  console.log(props);

  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={false}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

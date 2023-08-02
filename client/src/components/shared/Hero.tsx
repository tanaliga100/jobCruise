import { Box } from "@mui/material";
import React from "react";

const Hero: React.FC<IProps> = (props) => {
  console.log(props);

  //   const theme = useTheme();
  //   const path = props?.text.slice(1, props.text?.length);
  return <Box>{/* {path} */}</Box>;
};

export default Hero;

interface IProps {
  text?: string | undefined;
  isLoading?: boolean;
}

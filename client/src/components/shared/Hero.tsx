import { Heading } from "@chakra-ui/react";
import React from "react";

const Hero: React.FC<IProps> = (props) => {
  console.log(props);

  //   const theme = useTheme();
  //   const path = props?.text.slice(1, props.text?.length);
  return (
    <Heading as="p" size="sm">
      {/* {path} */}
    </Heading>
  );
};

export default Hero;

interface IProps {
  text?: string | undefined;
  isLoading?: boolean;
}

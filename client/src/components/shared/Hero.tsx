import React from "react";

const Hero: React.FC<IProps> = (props) => {
  //   const theme = useTheme();
  return <div>{props.text}</div>;
};

export default Hero;

interface IProps {
  text?: string;
  isLoading?: boolean;
}

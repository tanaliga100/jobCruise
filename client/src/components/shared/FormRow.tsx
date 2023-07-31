import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import React from "react";

interface IProps {
  name: string;
  labelText: string;
  defaulValue?: string;
  placeholder: string;
  type: string;
}

const FormRow: React.FC<IProps> = (props) => {
  return (
    <FormControl>
      <FormLabel>{props.labelText || props.name}</FormLabel>
      <Input type={props.type} required placeholder={props.placeholder} />
    </FormControl>
  );
};
export default FormRow;

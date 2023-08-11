import { Container, FormControl, FormLabel, TextField } from "@mui/material";
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
    <Container maxWidth="sm" sx={{ textAlign: "left", padding: ".3rem" }}>
      <FormControl fullWidth>
        <FormLabel sx={{ p: ".3rem" }}>
          {props.labelText || props.name}
        </FormLabel>
        <TextField
          variant="outlined"
          size="small"
          type={props.type}
          required
          // value={props.defaulValue}
          placeholder={props.placeholder}
        />
      </FormControl>
    </Container>
  );
};
export default FormRow;

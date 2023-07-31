import React from "react";
import styled from "styled-components";

interface IProps {
  name: string;
  labelText: string;
  defaulValue?: string;
  placeholder: string;
  type: string;
}

const FormRow: React.FC<IProps> = (props) => {
  return (
    <Wrapper className="form">
      <label htmlFor={props.labelText}>{props.labelText || props.name}</label>
      <input
        type={props.type}
        id={props.name}
        name={props.name}
        required
        placeholder={props.placeholder}
        //    defaultValue={props.defaulValue}
      />
    </Wrapper>
  );
};
export default FormRow;

const Wrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

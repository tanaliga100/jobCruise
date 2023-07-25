import styled from "styled-components";

export const FlexRow = styled.div`
  display: "flex";
  flex-grow: 1;
  justify-content: "center";
  gap: 1rem;
  align-items: "center";
`;
export const FlexColumn = styled.div`
  display: flex;
  gap: 1rem;
  flex-grow: 1;
  flex-direction: column;
  justify-content: start;
  align-items: center;
`;
export const GridRow = styled.div`
  display: grid;
  flex-shrink: 1;
  justify-content: center;
  align-items: center;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  width: 100%;
  place-items: center;
  text-align: center;
`;

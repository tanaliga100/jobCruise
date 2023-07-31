import { Outlet } from "react-router-dom";
import styled from "styled-components";
import DashboardNav from "../components/shared/DashboardNav";
import Sidebar from "../components/shared/Sidebar";

const DashboardLayout = () => {
  return (
    <Wrapper>
      <Container>
        <Sidebar />
        <DashboardNav />
      </Container>
      <MainContent>
        <Outlet />
      </MainContent>
    </Wrapper>
  );
};

export default DashboardLayout;

const Wrapper = styled.div``;

const MainContent = styled.div`
  /* display: grid; */
  display: flex;
  flex: 1;
  background-color: black;
  gap: 1rem;
`;
const Container = styled.div`
  display: grid;
  grid-template-columns: 20% 80%;
`;

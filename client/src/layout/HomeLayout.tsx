import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import styled from "styled-components";
import Navbar from "../components/shared/Navbar";
import homeImage from "/public/hero.svg";

const HomeLayout: React.FC = () => {
  const location = useLocation();

  return (
    <React.Fragment>
      <Navbar />
      <Wrapper>
        <section className="left">
          <h1 className="logo">Job Tracking App</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita,
            enim consequuntur culpa nesciunt laboriosam fuga autem repellendus
            esse aspernatur explicabo soluta eius veritatis error sint
            necessitatibus magnam numquam! Minima illum harum nam! Delectus
            doloremque illo optio qui recusandae tempore ea vel eius soluta
            labore laborum, eligendi sed, nisi magni harum!
          </p>
          {location.pathname === "/" && (
            <section className="start">
              <Link to="/register"> Start</Link>
            </section>
          )}
          {(location.pathname === "/register" ||
            location.pathname === "/login") && (
            <section className="start">
              <Link to="/register"> Login as Demo User</Link>
            </section>
          )}
        </section>
        <section className="right">
          <ScrollableSection>
            {location.pathname === "/" && (
              <img src={homeImage} width={300} height={300} />
            )}
            <Outlet />
          </ScrollableSection>
        </section>
      </Wrapper>
    </React.Fragment>
  );
};

export default HomeLayout;

const Wrapper = styled.div`
  display: grid;
  height: 100%;
  justify-content: center;
  text-align: center;
  place-items: center;
  padding: 3rem;
  grid-template-columns: 1fr 1fr;

  p {
    font-size: 1rem;
  }

  .logo {
    font-size: 3rem;
    font-weight: bolder;
  }

  @media screen and (max-width: 700px) {
    display: flex;
    padding: 2rem;
    padding-top: 5rem;
    flex-direction: column;
    .right {
      display: none;
    }
  }

  .start {
    background-color: black;
    padding: 1rem 1.4rem;
    font-size: 1rem;
    font-weight: 900;
    color: white;
    display: block;
    max-width: fit-content;
    margin: 0 auto;
    margin-top: 1rem;
  }
`;

const ScrollableSection = styled.section`
  height: 80vh;
  padding: 5rem;
  overflow: auto;
  display: flex;
  place-items: center;
  scroll-behavior: smooth;
`;

{
  /* <main className="home-layout">
  <section>
    <h1>Logo Here</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
      doloribus, molestiae, accusantium adipisci accusamus modi cupiditate
      libero amet eius nam iure alias perferendis ipsam explicabo, iste nesciunt
      ipsum vitae dolorem.
    </p>
  </section>
  <section className="right-section"></section>
</main> */
}

//  <section>
//    <h1>Logo Here</h1>
//    <p>
//      Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
//      doloribus, molestiae, accusantium adipisci accusamus modi cupiditate libero
//      amet eius nam iure alias perferendis ipsam explicabo, iste nesciunt ipsum
//      vitae dolorem.
//    </p>
//  </section>;

//   const [showRegisterModal, setShowRegisterModal] = useState(false);
//   const showRegister = () => {
//     setShowRegisterModal(true);
//   };
//   const closeRegister = () => {
//     setShowRegisterModal(false);
//   };

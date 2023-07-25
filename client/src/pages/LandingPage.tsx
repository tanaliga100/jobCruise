import styled from "styled-components";

const LandingPage = () => {
  return (
    <Wrapper>
      <section className="left">
        <h1>Logo Here</h1>
        <p className="content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          doloribus, molestiae, accusantium adipisci accusamus modi cupiditate
          libero amet eius nam iure alias perferendis ipsam explicabo, iste
          nesciunt ipsum vitae dolorem.
        </p>
      </section>
      <section className="right"></section>
    </Wrapper>
  );
};

export default LandingPage;

const Wrapper = styled.div`
  display: grid;
  height: 100%;
  justify-content: center;
  text-align: center;
  place-items: center;
  grid-template-columns: 1fr 1fr;

  .left {
    padding: 1rem;
  }
  .right {
    padding: 1rem;
  }
`;

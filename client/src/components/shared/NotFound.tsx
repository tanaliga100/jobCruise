import { Link, useRouteError } from "react-router-dom";
import styled from "styled-components";
interface IError {
  data: string;
  status: number;
  statusText: string;
}

const NotFoundPage = () => {
  const error = useRouteError() as IError;
  console.log("ERROR", error);

  return (
    <Wrapper className="error-section">
      <h1 className="error-title">
        {error.statusText} : {error.status}
      </h1>
      <p className="error-content">{error.data}</p>
      <div className="error-link">
        <Link to="/">Go Back</Link>
      </div>
    </Wrapper>
  );
};

export default NotFoundPage;

const Wrapper = styled.div`
  display: grid;
  padding: 3rem;
  text-align: center;
  gap: 2rem;
  width: 100vw;
  margin: 0 auto;

  .error-title {
    font-size: 3rem;
    font-weight: 800;
  }
  .error-content {
    color: orangered;
    font-size: 1rem;
  }
  .error-link {
    background-color: black;
    color: orangered;
    width: auto;
    padding: 1rem;
  }
`;

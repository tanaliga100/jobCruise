import { Link, useRouteError } from "react-router-dom";

interface IError {
  data: string;
  status: number;
  statusText: string;
}

const NotFoundPage = () => {
  const error = useRouteError() as IError;
  console.log("ERROR", error);

  return (
    <section className="error-section">
      <h1>
        {error.statusText} : {error.status}
      </h1>
      <p>{error.data}</p>
      <div className="link-error">
        <Link to="/">Go Back</Link>
      </div>
    </section>
  );
};

export default NotFoundPage;

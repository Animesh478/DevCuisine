import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const err = useRouteError();
  console.log(err);
  return (
    <>
      <h1>OOPS!!</h1>
      <h2>
        Something went wrong. {err.status} {err.statusText}
      </h2>
    </>
  );
}

export default ErrorPage;

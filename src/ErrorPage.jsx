import { useRouteError } from "react-router-dom";

export const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div
      id="error-page"
      className="w-screen h-screen flex flex-col items-center justify-center"
    >
      <h1 className="text-7xl font-bold mb-7">Oops!</h1>

      <p className="text-3xl">Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
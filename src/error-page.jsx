import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div 
      id="error-page" 
      className="d-flex flex-column align-items-center justify-content-center" 
      style={{height: "100vh"}}
    >
      <h1 className="text-center">Oops!</h1>
      <p className="text-center">Sorry, an unexpected error has occurred.</p>
      <p className="text-center">
        <i className="text-center">{error.statusText || error.message}</i>
      </p>
    </div>
  );
}

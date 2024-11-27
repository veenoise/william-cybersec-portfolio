import { useEffect } from "react";
import { useLocation, useNavigate, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const homeEndpoints = [
    '/home', 
    '/skills', 
    '/experience', 
    '/projects', 
    '/contact'
  ];
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {  
    if (homeEndpoints.includes(location.pathname)) {
      navigate(`/#/${location.pathname.substring(1)}`)
    }
    
  }, [])
  const error = useRouteError();

  return (
    <div 
      id="error-page" 
      className="d-flex flex-column align-items-center justify-content-center" 
      style={{height: "100vh"}}
    >
      {
        !homeEndpoints.includes(location.pathname) ?
        <>
          <h1 className="text-center">Oops!</h1>
          <p className="text-center">Sorry, an unexpected error has occurred.</p>
          <p className="text-center">
            <i className="text-center">{error.statusText || error.message}</i>
          </p> 
        </>:
        <></>
      }
      
    </div>
  );
}

import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './routes/root'
import ErrorPage from "./error-page";
import './index.css'
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import Blog from './Blog/Blog'
import App from './App'

const router = createHashRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true, 
        element: <App />, 
      },
      {
        path: "blogs/",
        element: <Blog />,
      },
    ],

  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

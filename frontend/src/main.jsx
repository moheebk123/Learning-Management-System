import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import './index.css'

const submitForm = () => {

}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/home", element: <></> },
      { path: "/about", element: <></> },
      { path: "/webinar", element: <></> },
      { path: "/jobs", element: <></> },
      { path: "/courses", element: <></> },
      { path: "/it-news", element: <></> },
      { path: "/register", element: <></> },
      { path: "/login", element: <></> },
      { path: "/contact-us", element: <></>, action: submitForm },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

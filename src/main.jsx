 
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import App from "./App";
import Timeline from "./Pages/Home/Timeline";
import Root from "./Layout/Root";
import Home from "./Pages/Home/Home";
import Stats from "./Pages/Home/Stats";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: () => fetch("/friends.json"),
      },
      {
        path: 'ProfileDetails/:id',
        element: <ProfileDetails />,
        loader: () => fetch('/friends.json')
      },
      {
        path: '/timeline',
        element: <Timeline />
      },
      {
        path: '/stats',
        element: <Stats />
      }
    ],
    errorElement: <ErrorPage />,
  },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
   <StrictMode>
     <RouterProvider router={router} />,
   </StrictMode>
  
);

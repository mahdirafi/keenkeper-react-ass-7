import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import './index.css'
 
import Root from "./Layout/Root";
import Home from "./Pages/Home/Home";
import ProfileDetails from "./Profile/ProfileDetails";
import Timeline from "./Pages/Home/Timeline";
import TimelineProvider from "./context/TimelineContext";
import { ToastContainer } from "react-toastify";
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
    
  },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
    
      <TimelineProvider>
      <RouterProvider router={router} />
      <ToastContainer />
    </TimelineProvider>
  
);

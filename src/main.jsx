import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import './index.css'
 
import Root from "./Layout/Root";
import Home from "./Pages/Home/Home";
 
 

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: () => fetch("/friends.json"),
      }
       
    ],
    
  },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
    
     
      <RouterProvider router={router} />
       
    
  
  
);

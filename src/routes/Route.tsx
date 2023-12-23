import { RouterProvider, createBrowserRouter } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Landing from "../pages/Landing";
import PublicRoute from "./visibility/PublicRoute";
import PrivateRoute from "./visibility/PrivateRoute";
import Home from "../pages/Home";

const createRouter = createBrowserRouter([
  {
    path: "/",
    element: <PublicRoute />,
    children: [
      {
        path: "/",
        element: <Landing />,
      },
    ],
  },
  {
    path: "/",
    element: <PrivateRoute />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

const Router = () => {
  return <RouterProvider router={createRouter} />;
};

export default Router;

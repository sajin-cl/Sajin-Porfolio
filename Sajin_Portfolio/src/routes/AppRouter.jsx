import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import Layout from "@/layout/layout";

const Home = lazy(() => import("@/pages/Home"));
const Blog = lazy(() => import("@/pages/Blog"));

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/blog", element: <Blog /> }
    ]
  }
]);

export default AppRouter;
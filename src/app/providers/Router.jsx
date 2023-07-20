import React from "react";
import { Navigate, createBrowserRouter } from "react-router-dom";

/** Views */
import ContentLayout from "../../components/layouts/ContentLayout";
import Index from "../../views/Index";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <ContentLayout />, // Layout
    children: [
      {
        path: "/dashboard",
        element: <Navigate to="/" />
      },
      {
        path: "/",
        element: <Index />
      }
    ]
  },
  {
    path: "/",
    element: <ContentLayout />,
    children: [
      {
        path: "example",
        element: <Index />
      }
    ]
  }
]);

export default Router;

import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { Login, Signup } from "../Auth";
import Landingpage from "../Landingpage";
import Products from "../Products";
import ProtectedRoute from "./ProtectedRoute";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Landingpage />,
  },
  {
    path: "/login",
    element: (
      <>
        <Login />
      </>
    ),
  },
  {
    path: "/signup",
    element: (
      <>
        <Signup />
      </>
    ),
  },
  {
    path: "/product",
    element: (
      <>
        <ProtectedRoute>
          <Products />
        </ProtectedRoute>
      </>
    ),
  },
]);

export default router;

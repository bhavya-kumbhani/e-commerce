import React from "react";
import { createBrowserRouter } from "react-router-dom";
import SignedInRoute from "./SignedInRoute";
import { Login, Signup } from "../Auth";
import Landingpage from "../Landingpage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Landingpage />,
  },
  {
    path: "/login",
    element: <Login />,
  },

  {
    path: "/signup",
    element: <Signup />,
  },
]);

export default router;

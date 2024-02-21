import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { Login, Signup } from "../Auth";
import Landingpage from "../Landingpage";
import Products from "../Products";
import ProtectedRoute from "./ProtectedRoute";
import EditProduct from "../Products/EditProduct";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Landingpage />,
  },
  {
    path: "/login",
    element: (
      <>
        <ProtectedRoute>
          <Login />
        </ProtectedRoute>
      </>
    ),
  },
  {
    path: "/signup",
    element: (
      <>
        <ProtectedRoute>
          <Signup />
        </ProtectedRoute>
      </>
    ),
  },
  {
    path: "/product",
    element: (
      <>
        <Products />
      </>
    ),
  },
  {
    path: "/edit-product/:productId",
    element: (
      <>
        <EditProduct />
      </>
    ),
  },
]);

export default router;

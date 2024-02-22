import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { userInfo } = useSelector((state) => state.auth);
  const isAuthenticated = Object.keys(userInfo)?.length > 0;
  if (isAuthenticated) return children;

  return <Navigate to="/" />;
};

export default ProtectedRoute;

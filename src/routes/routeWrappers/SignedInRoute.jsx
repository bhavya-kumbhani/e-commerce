import React from "react";
import { Navigate } from "react-router-dom";

const SignedInRoute = ({ children }) => {
  // const [cookies] = useCookies(["auth"]);
  const isAuthenticated = false
    // cookies?.["hbk-token"] !== undefined ||
    // cookies?.livfeuserinfo !== undefined;
  if (!isAuthenticated) return <Navigate to="/" />;

  return (
    <>
      {children}
    </>
  );
};

export default SignedInRoute;

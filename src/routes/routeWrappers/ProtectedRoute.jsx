import { Navigate, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import React, { useEffect } from "react";
import { getUserById } from "../../store/slices/authSlice";
import { useDispatch } from "react-redux";
import Loader from "../../components/HOC/Loader";
import { checkConnect } from "../../store/slices/planSlice";

const ProtectedRoute = ({ children }) => {
  const [cookies] = useCookies(["auth"]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated =
    !!cookies?.["hbk-token"] || !!cookies?.livfeuserinfo;
  const [loader, setLoader] = React.useState(isAuthenticated ? true : false);
  useEffect(() => {
    if (isAuthenticated) {
      setLoader(true);
      dispatch(getUserById())
        .unwrap()
        .then((res) => {
          navigate("/");
        })
        .catch((err) => {
          if (err.message === "Please purchase subscription") {
            navigate("/pricing");
          } else if (err.message === "Please connect your stripe account") {
            navigate("/user-info");
          }
          setLoader(false);
        });
    }
  }, []);

  if (isAuthenticated) return <>{loader ? <Loader /> : children}</>;

  return <Navigate to="/login" />;
  // return (window.location.href = );
};

export default ProtectedRoute;

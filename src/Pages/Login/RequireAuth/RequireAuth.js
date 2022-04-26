import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../../firebase.init";
import Loding from "../../../Loding/Loding";

const RequireAuth = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const location = useLocation();

  if (loading) {
    return <Loding />;
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (user.providerData[0]?.providerId === "password" && !user.emailVerified) {
    return (
      <div className="text-center">
        <h1 className="text-danger">You Do not Varified Email</h1>
        <h1 className="text-success">Please Varified Your Email </h1>
      </div>
    );
  }
  return children;
};

export default RequireAuth;

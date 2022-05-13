import React, { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import "./SocialLogin.css";
import {
  useSignInWithFacebook,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import useToken from "../../../Hook/useToken";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithFacebook, user1, loading1, error1] =
    useSignInWithFacebook(auth);
  const [token] = useToken(user);
  const navigate = useNavigate();

  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  if (token) {
    navigate(from, { replace: true });
  }

  let errorelement;

  if (error) {
    errorelement = <p className="text-center text-danger">{error.message}</p>;
  }

  return (
    <div className="mt-3">
      <div className="d-flex align-items-center">
        <div style={{ height: "1px" }} className="bg-secondary w-50"></div>
        <p className="px-2 mt-2">or</p>
        <div style={{ height: "1px" }} className="bg-secondary w-50"></div>
      </div>

      {errorelement}
      <div className="icon-auth text-center">
        <button
          style={{ height: "45px", borderRadius: "20px" }}
          className="btn border border-danger w-75 my-2"
          onClick={() => signInWithGoogle()}
        >
          <FaGoogle style={{ fontSize: "25px" }} />
          <span className="ms-2">Sign in Google</span>
        </button>
        <button
          style={{ height: "45px", borderRadius: "20px" }}
          className="btn border border-danger w-75 my-2"
        >
          <FaFacebookF style={{ fontSize: "25px" }} />
          <span className="ms-1">Sign in Facebook</span>
        </button>
        <button
          style={{ height: "45px", borderRadius: "20px" }}
          className="btn border border-danger w-75 my-2"
        >
          <FaGithub style={{ fontSize: "25px" }} />
          <span className="ms-1">Sign in Github</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;

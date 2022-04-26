import React, { useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Loding from "../../../Loding/Loding";
import SocialLogin from "../SocialLogin/SocialLogin";
import toast, { Toaster } from "react-hot-toast";
import HelmetTitle from "../../Shared/HelmetTitle/HelmetTitle";
import axios from "axios";
import useToken from "../../../Hook/useToken";

const notify = () => toast("Reset password Send Your Email");

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  const location = useLocation();
  const [sendEmail, setSendEmail] = useState("");

  let from = location.state?.from?.pathname || "/";

  // use react firebase  hook
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const [sendPasswordResetEmail, sending, errorResetPassword] =
    useSendPasswordResetEmail(auth);

  const [token] = useToken(user);
  if (sending || loading) {
    <Loding />;
  }

  if (token) {
    navigate(from, { replace: true });
  }

  const email = emailRef.current.value;
  const password = passwordRef.current.value;

  const handleSubmit = async (event) => {
    event.preventDefault();
    await signInWithEmailAndPassword(email, password);
    //  this is jwt token api
  };

  const navigateRegister = (event) => {
    navigate("/register");
  };

  let errorelement;
  if (error) {
    errorelement = <p className="text-center text-danger">{error.message}</p>;
  }

  const resetEmail = () => {
    sendPasswordResetEmail(email).then((res) => {
      setSendEmail("Varification Message Send");
    });
  };

  return (
    <div className="container w-50 mx-auto text-center my-5">
      <HelmetTitle title="Login" />
      <h2 className="text-dark text-center mt-2">Please Login</h2>
      <Toaster />
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            ref={emailRef}
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            ref={passwordRef}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>

        {errorelement}
        <Button
          variant="danger"
          type="submit"
          className="d-block mx-auto w-25 my-4"
        >
          Submit
        </Button>
      </Form>
      <p className="mt-3">
        New to Genius Car?{" "}
        <Link
          to="/register"
          className="text-danger pe-auto text-decoration-none"
          onClick={navigateRegister}
        >
          Please Register
        </Link>{" "}
      </p>
      <p>{sendEmail}</p>
      <p className="mt-3 pe-auto text-decoration-none">
        Forget Password?{" "}
        <span
          style={{ cursor: "pointer" }}
          className="text-danger"
          onClick={() => {
            resetEmail();
            notify();
          }}
        >
          Reset Password
        </span>
      </p>
      <SocialLogin />
    </div>
  );
};

export default Login;

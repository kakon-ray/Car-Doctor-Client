import React, { useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
  useSendEmailVerification,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import "./Register.css";
import auth from "../../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";
import { Button, Form } from "react-bootstrap";
import { sendEmailVerification } from "firebase/auth";
import { async } from "@firebase/util";
import Loding from "../../../Loding/Loding";
import HelmetTitle from "../../Shared/HelmetTitle/HelmetTitle";
import useToken from "../../../Hook/useToken";

const Register = () => {
  const [checkBox, setCheckBox] = useState();
  const [createUserWithEmailAndPassword, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  const [updateProfile, updating, updateProfiel] = useUpdateProfile(auth);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const location = useLocation();
  const [token] = useToken(user);

  const navigateLogin = () => {
    navigate("/login");
  };

  if (Loding || updating) {
    <Loding />;
  }

  let from = location.state?.from?.pathname || "/";
  if (token) {
    navigate(from, { replace: true });
  }

  const handleRegister = async (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;
    const displayName = event.target.name.value;

    await createUserWithEmailAndPassword(email, password);

    await updateProfile({ displayName });
    alert("Updated profile");
  };

  if (user) {
    navigate("/");
  }

  console.log(checkBox);
  return (
    <div className="register-form mt-5">
      <HelmetTitle title="Register" />
      <h2 style={{ textAlign: "center" }}>Please Register</h2>
      <form onSubmit={handleRegister}>
        <input type="text" name="name" id="" placeholder="Your Name" />

        <input
          type="email"
          name="email"
          id=""
          placeholder="Email Address"
          required
        />

        <input
          type="password"
          name="password"
          id=""
          placeholder="Password"
          required
        />

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            className={`${!checkBox ? "text-danger" : "text-success"} `}
            onChange={() => setCheckBox(!checkBox)}
            label="Check me out"
          />
        </Form.Group>

        <Button
          variant="danger"
          disabled={!checkBox}
          type="submit"
          className="d-block mx-auto w-25 my-4"
        >
          Submit
        </Button>
      </form>
      <p>
        Already have an account?{" "}
        <Link
          to="/login"
          className="text-danger pe-auto text-decoration-none"
          onClick={navigateLogin}
        >
          Please Login
        </Link>{" "}
      </p>
      <SocialLogin />
    </div>
  );
};

export default Register;

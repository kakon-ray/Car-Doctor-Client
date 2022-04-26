import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import logo from "../../../images/logo.png";
import "./Header.css";

const Header = () => {
  const [user] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth);
  };

  console.log(user);

  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        sticky="top"
        bg="danger"
        variant="dark"
      >
        <Container>
          <Navbar.Brand as={Link} to="/">
            CAR DOCTOR
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Link to="home" className="nav-link">
                SERVICES
              </Link>
              <Link to="experts" className="nav-link">
                EXPERTS
              </Link>
              <Link to="about" className="nav-link">
                ABOUT
              </Link>

              {user ? (
                <>
                  <Link to="addservice" className="nav-link">
                    ADD USER
                  </Link>
                  <Link to="manage" className="nav-link">
                    MANAGE
                  </Link>
                  <Link to="order" className="nav-link">
                    ORDER
                  </Link>
                  <button
                    className="btn btn-link text-white text-decoration-none"
                    onClick={handleSignOut}
                  >
                    SIGN OUT
                  </button>
                </>
              ) : (
                <Link to="login" className="nav-link">
                  LOGIN
                </Link>
              )}
              <NavDropdown
                title={user?.displayName}
                id="collasible-nav-dropdown"
              >
                <NavDropdown.Item href="#action/3.1">
                  {user ? (
                    <img
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "50px",
                      }}
                      src={user.photoURL}
                      alt=""
                    />
                  ) : (
                    ""
                  )}
                  <h5>{user?.displayName}</h5>
                  <h5>{user?.email}</h5>
                </NavDropdown.Item>

                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">ACCOUNT</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;

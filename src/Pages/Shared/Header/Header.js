import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import userimg from "../../../images/user.png";
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
                  <div className="w-50">
                    <img
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "50px",
                      }}
                      src={user?.photoURL ? user?.photoURL : userimg}
                      alt=""
                    />
                    <h5>{user?.displayName}</h5>
                    <h5>{user?.email}</h5>
                  </div>
                </NavDropdown.Item>

                <NavDropdown.Divider />
                <button
                  className="btn btn-link text-dark text-decoration-none"
                  onClick={handleSignOut}
                >
                  SIGN OUT
                </button>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;

import { Navbar, Nav, Container, Offcanvas, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./NavBar.css";
import { auth } from "./config/firebase";
import { useEffect, useState } from "react";

const NavigationBar = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 800);
  }, [count]);

  return (
    <div className="Navbar">
      <nav>
        {["lg"].map((expand) => (
          <Navbar
            key={expand}
            expand={expand}
            className="bg-body-tertiary mt-3 header"
          >
            <Container>
              <Navbar.Brand>LAKBAY - TIKANG</Navbar.Brand>
              <Navbar.Toggle
                aria-controls={`offcanvasNavbar-expand-${expand}`}
              />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    Offcanvas
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  {auth.currentUser ? (
                    <Nav className="justify-content-end flex-grow-1 pe-3">
                      <Nav.Link>
                        <Link className="navbar-link" to="/Admin">
                          Dashboard
                        </Link>
                      </Nav.Link>
                      {/* <Nav.Link>
                        <Link className="navbar-link" to="/Admin">
                          Dashboard
                        </Link>
                      </Nav.Link> */}
                    </Nav>
                  ) : (
                    <></>
                  )}

                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Link className="header-btn-group" to="/AdLogin">
                      <Button>{auth.currentUser ? "logout" : "login"}</Button>
                    </Link>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}
      </nav>
    </div>
  );
};

export default NavigationBar;

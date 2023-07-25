import { Navbar, Nav, Container, Button } from "react-bootstrap";
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

  // Function to handle logout and redirection
  const handleLogout = () => {
    auth
      .signOut()
      .then(() => {
        // Redirect to the Login page after successful logout
        window.location.href = "/AdLogin";
      })
      .catch((error) => {
        // Handle error, if any
        console.error("Error logging out: ", error);
      });
  };

  return (
    <div className="Navbar">
      <Container>
        <Navbar expand="lg" className="bg-body-tertiary mt-3 header">
          <Navbar.Brand className="mx-auto">
            <img
              src={process.env.PUBLIC_URL + "/Images/Lakbay - Tikang.png"}
              alt="LAKBAY - TIKANG"
              width="100"
              height="80"
            />
          </Navbar.Brand>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              {auth.currentUser ? (
                <Nav.Link>
                  <Link className="navbar-link" to="/Admin">
                    Dashboard
                  </Link>
                </Nav.Link>
              ) : null}
              <Button onClick={handleLogout}>
                {auth.currentUser ? "Logout" : "Login"}
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </div>
  );
};

export default NavigationBar;

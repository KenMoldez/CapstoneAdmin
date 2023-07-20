import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import "./Login.css";

import { auth } from "./config/firebase";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
function Login(props) {
  const [count, setCount] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [spin, setSpin] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  }, [count]);

  const signIn = async () => {
    setSpin(" ");
    try {
      if (email != "admin@lakbay-tikang.com") {
        await signInWithEmailAndPassword(auth, email, password + " ");
      }
      await signInWithEmailAndPassword(auth, email, password);
      await props.getBookings();
    } catch (err) {
      console.error(err);
    }
    // props.getBookings();
    setSpin("");
  };

  return (
    <>
      {auth.currentUser ? (
        <>
          <Button onClick={async (e) => signOut(auth)}>Log out</Button>
        </>
      ) : (
        <Container fluid className="login">
          <Row className="d-flex justify-content-center align-items-center h-100">
            <Col xs={12}>
              <Card
                className="bg-dark text-white my-5 mx-auto"
                style={{ borderRadius: "1rem", maxWidth: "400px" }}
              >
                <Card.Body className="p-5 d-flex flex-column align-items-center mx-auto w-100">
                  <h2 className="fw-bold mb-2 text-uppercase">ADMIN Login</h2>
                  <p className="text-white-50 mb-5">
                    Enter Admin login and password!
                  </p>
                  <Form className="w-100">
                    <Form.Group className="mb-4  w-100">
                      <Form.Label className="text-white">
                        Admin Email
                      </Form.Label>
                      <Form.Control
                        type="email"
                        size="lg"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </Form.Group>
                    <Form.Group className="mb-4  w-100">
                      <Form.Label className="text-white">Password</Form.Label>
                      <Form.Control
                        type="password"
                        size="lg"
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </Form.Group>
                    <p className="small mb-3 pb-lg-2">
                      <a className="text-white-50" href="#!">
                        Forgot password?
                      </a>
                    </p>
                    {spin ? (
                      <></>
                    ) : (
                      <Button
                        className="mx-2 px-5"
                        variant="outline-light"
                        size="lg"
                        onClick={signIn}
                      >
                        Login
                      </Button>
                    )}
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
}

export default Login;

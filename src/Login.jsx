import React from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import "./Login.css";

function Login() {
  return (
    <Container fluid className="login">
      <Row className="d-flex justify-content-center align-items-center h-100">
        <Col xs={12}>
          <Card
            className="bg-dark text-white my-5 mx-auto"
            style={{ borderRadius: "1rem", maxWidth: "400px" }}
          >
            <Card.Body className="p-5 d-flex flex-column align-items-center mx-auto w-100">
              <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
              <p className="text-white-50 mb-5">
                Please enter your login and password!
              </p>
              <Form className="w-100">
                <Form.Group className="mb-4  w-100">
                  <Form.Label className="text-white">Admin Email</Form.Label>
                  <Form.Control type="email" size="lg" />
                </Form.Group>
                <Form.Group className="mb-4  w-100">
                  <Form.Label className="text-white">Password</Form.Label>
                  <Form.Control type="password" size="lg" />
                </Form.Group>
                <p className="small mb-3 pb-lg-2">
                  <a className="text-white-50" href="#!">
                    Forgot password?
                  </a>
                </p>
                <Button className="mx-2 px-5" variant="outline-light" size="lg">
                  Login
                </Button>
              </Form>
              <div className="d-flex flex-row mt-3 mb-5">
                <Button
                  tag="a"
                  variant="link"
                  className="m-3"
                  style={{ color: "white" }}
                >
                  <i className="fab fa-facebook-f" />
                </Button>
                <Button
                  tag="a"
                  variant="link"
                  className="m-3"
                  style={{ color: "white" }}
                >
                  <i className="fab fa-twitter" />
                </Button>
                <Button
                  tag="a"
                  variant="link"
                  className="m-3"
                  style={{ color: "white" }}
                >
                  <i className="fab fa-google" />
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;

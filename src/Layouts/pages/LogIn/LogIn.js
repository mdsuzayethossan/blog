import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";
function LogIn() {
  const navigate = useNavigate();
  const { signIn } = useContext(AuthContext);
  const [emailErr, setEmailErr] = useState();
  const [passwordErr, setPasswordErr] = useState();
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    if (!email) {
      setEmailErr("Email field is required");
      return;
    } else {
      setEmailErr("");
    }
    if (!password) {
      setPasswordErr("Password field is required");
      return;
    } else {
      setPasswordErr("");
      signIn(email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          form.reset();
          navigate("/");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    }
  };
  return (
    <Form onSubmit={handleLogin}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name="email" placeholder="Enter email" />
        {emailErr ? (
          <Form.Text className="text-muted">{emailErr}</Form.Text>
        ) : (
          ""
        )}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" placeholder="Password" />
        {passwordErr ? (
          <Form.Text className="text-muted">{passwordErr}</Form.Text>
        ) : (
          ""
        )}
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default LogIn;

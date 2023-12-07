import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import { useState } from "react";
import { LOGIN_USER } from "../utils/mutations";

import Auth from "../utils/auth";
import { useMutation } from "@apollo/client";

const LoginForm = (props) => {
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: "",
      password: "",
    });
  };

  return (
    <Card className="box-shadow auth-form-size">
      <Card.Body>
        <Card.Title>Login</Card.Title>
        <Form onSubmit={handleFormSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              name="email"
              type="email"
              placeholder="Enter email"
              value={formState.email}
              onChange={handleChange}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password"
              type="password"
              placeholder="******"
              value={formState.password}
              onChange={handleChange}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default LoginForm;

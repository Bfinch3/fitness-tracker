import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import { useState } from "react";
import { LOGIN_USER } from "../utils/mutations";

import Auth from "../utils/auth";
import { useMutation } from "@apollo/client";

const LoginForm = (props) => {
  const [formState, setFormState] = useState({
    username: "",
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
      username: "",
      email: "",
      password: "",
    });
  };

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>Login</Card.Title>
        <form onSubmit={handleFormSubmit}>
          <input
            className="form-input"
            placeholder="Your username"
            name="username"
            type="input"
            value={formState.username}
            onChange={handleChange}
          />
          <input
            className="form-input"
            placeholder="Your email"
            name="email"
            type="email"
            value={formState.email}
            onChange={handleChange}
          />
          <input
            className="form-input"
            placeholder="******"
            name="password"
            type="password"
            value={formState.password}
            onChange={handleChange}
          />

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </form>
      </Card.Body>
    </Card>
  );
};

export default LoginForm;

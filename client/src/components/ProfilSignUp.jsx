import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../redux/actions";
import { Redirect } from "react-router-dom";

const ProfilSignUp = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loading, users } = useSelector((state) => state);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      fullName,
      email,
      password,
    };
    dispatch(registerUser(newUser));
  };

  return (
    <div className="up">
      <Form>
        {loading ? (
          <h1 className="upLo"> loading ...</h1>
        ) : users ? (
          <Redirect to="/signin"></Redirect>
        ) : (
          <>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <h1 className="hello">Please registre here to subscribe</h1>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Form.Text className="text-muted">
                We'll never share your informations with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Control
                type="text"
                placeholder="Enter your name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
              <Form.Text className="text-muted">
                We'll never share your informations with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Form.Text className="text-muted">
                We'll never share your informations with anyone else.
              </Form.Text>
            </Form.Group>
          </>
        )}

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Button onClick={handleSubmit} variant="warning" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default ProfilSignUp;

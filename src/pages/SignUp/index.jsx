import { useState } from "react";

import { FiLock, FiMail, FiUser } from "react-icons/fi";
import { Link, useNavigate } from "react-router";

import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { api } from "../../services/api";
import { Background, Container, Form } from "./styles";

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleSignUp() {
    if (!name || !email || !password) {
      return alert("Fill in all fields!");
    }

    api
      .post("/users", { name, email, password })
      .then(() => {
        alert("User registered successfully!");

        navigate("/");
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert("Unable to register");
        }
      });
  }

  return (
    <Container>
      <Form>
        <h1>Rocket Notes</h1>
        <p>An application to save and manager your usefull links.</p>
        <h2>Create an account</h2>
        <Input
          placeholder="Username"
          type="text"
          icon={FiUser}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          placeholder="Email"
          type="text"
          icon={FiMail}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Password"
          type="password"
          icon={FiLock}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button title="Sign up" onClick={handleSignUp} />

        <Link to="/">Already have an account?</Link>
      </Form>
      <Background />
    </Container>
  );
}

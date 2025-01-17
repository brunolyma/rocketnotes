import { FiLock, FiMail } from "react-icons/fi";

import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Background, Container, Form } from "./styles";

export function SignIn() {
  return (
    <Container>
      <Form>
        <h1>Rocket Notes</h1>
        <p>An application to save and manager your usefull links.</p>
        <h2>Sign in now</h2>
        <Input placeholder="Email" type="text" icon={FiMail} />
        <Input placeholder="Password" type="password" icon={FiLock} />
        <Button title="Sign in" />

        <a href="#">Sign Up</a>
      </Form>

      <Background />
    </Container>
  );
}

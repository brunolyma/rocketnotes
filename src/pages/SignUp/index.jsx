import { FiLock, FiMail, FiUser } from "react-icons/fi";

import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Background, Container, Form } from "./styles";

export function SignUp() {
  return (
    <Container>
      <Form>
        <h1>Rocket Notes</h1>
        <p>An application to save and manager your usefull links.</p>
        <h2>Create an account</h2>
        <Input placeholder="Username" type="text" icon={FiUser} />
        <Input placeholder="Email" type="text" icon={FiMail} />
        <Input placeholder="Password" type="password" icon={FiLock} />
        <Button title="Sign up" />

        <a href="#">Already have an account?</a>
      </Form>
      <Background />
    </Container>
  );
}

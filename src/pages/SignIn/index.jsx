import { useState } from 'react';

import {
  FiLock,
  FiMail,
} from 'react-icons/fi';
import { Link } from 'react-router';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { useAuth } from '../../hooks/auth';
import {
  Background,
  Container,
  Form,
} from './styles';

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useAuth();

  function handleSignIn() {
    signIn({ email, password });
  }

  return (
    <Container>
      <Form>
        <h1>Rocket Notes</h1>
        <p>An application to save and manager your usefull links.</p>
        <h2>Sign in now</h2>
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
        <Button title="Sign in" onClick={handleSignIn} />

        <Link to="/register">Sign Up</Link>
      </Form>

      <Background />
    </Container>
  );
}

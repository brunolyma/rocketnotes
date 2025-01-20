import { FiArrowLeft, FiCamera, FiLock, FiMail, FiUser } from "react-icons/fi";
import { Link } from "react-router";

import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Avatar, Container, Form } from "./styles";

export function Profile() {
  return (
    <Container>
      <header>
        <Link to="/">
          <FiArrowLeft />
        </Link>
      </header>

      <Form>
        <Avatar>
          <img
            src="https://github.com/brunolyma.png"
            alt="user photo profile"
          />
          <label htmlFor="avatar">
            <FiCamera />
          </label>
        </Avatar>
        <Input placeholder="Name" type="text" icon={FiUser} />
        <Input placeholder="Email" type="text" icon={FiMail} />
        <Input placeholder="Current password" type="text" icon={FiLock} />
        <Input placeholder="New password" type="text" icon={FiLock} />

        <Button title="Save" />
      </Form>
    </Container>
  );
}

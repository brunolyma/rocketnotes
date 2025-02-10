import { RiShutDownLine } from "react-icons/ri";

import { useAuth } from "../../hooks/auth";
import { Container, Logout, Profile } from "./styles";

export function Header() {
  const { signOut } = useAuth();

  return (
    <Container>
      <Profile to="/profile">
        <img src="http://github.com/brunolyma.png" alt="user image profile" />
        <div>
          <span>Bem-vindo</span>
          <strong>Bruno Lima</strong>
        </div>
      </Profile>

      <Logout onClick={signOut}>
        <RiShutDownLine />
      </Logout>
    </Container>
  );
}

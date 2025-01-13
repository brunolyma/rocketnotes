import { RiShutDownLine } from "react-icons/ri";

import { Container, Logout, Profile } from "./styles";

export function Header() {
  return (
    <Container>
      <Profile>
        <img src="http://github.com/brunolyma.png" alt="user image profile" />
        <div>
          <span>Bem-vindo</span>
          <strong>Bruno Lima</strong>
        </div>
      </Profile>

      <Logout>
        <RiShutDownLine />
      </Logout>
    </Container>
  );
}

import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section/index";
import { Container, Links } from "./styles";

export function Details() {
  return (
    <>
      <Container>
        <Header />
        <Section title="Links uteis">
          <Links>
            <li>
              <a href="#">https://rocketseat.com.br/</a>
            </li>
            <li>
              <a href="#">https://rocketseat.com.br/</a>
            </li>
          </Links>
        </Section>
        <Button title="Voltar" />
      </Container>
    </>
  );
}

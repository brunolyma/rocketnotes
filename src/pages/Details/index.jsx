import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';
import { Header } from '../../components/Header';
import { Section } from '../../components/Section/index';
import { Tag } from '../../components/Tag';
import {
  Container,
  Content,
  Links,
} from './styles';

export function Details() {
  return (
    <>
      <Container>
        <Header />
        <main>
          <Content>
            <ButtonText title="Excluir nota" />

            <h1>Introducao ao React</h1>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
              sint corporis. Necessitatibus possimus rem aperiam libero,
              sapiente voluptatum, vitae facilis doloribus, debitis quo enim
              beatae ratione? Sapiente quod commodi totam? doloremque!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus
              accusamus optio hic corporis, laborum eligendi at vel fugit, error
              impedit expedita, laboriosam delectus beatae. Est nisi magnam
              magni repellendus
            </p>
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
            <Section title="Marcadores">
              <Tag title="express" />
              <Tag title="nodejs" />
            </Section>
            <Button title="Voltar" />
          </Content>
        </main>
      </Container>
    </>
  );
}

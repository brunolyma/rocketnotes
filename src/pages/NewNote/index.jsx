import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { NoteItem } from '../../components/NoteItem';
import { Textarea } from '../../components/TextArea';
import {
  Container,
  Form,
} from './styles';

export function NewNote() {
  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <h1>Create note</h1>
            <a href="/">Return</a>
          </header>

          <Input placeholder="Title" />

          <Textarea placeholder="Observations" />

          <NoteItem />
        </Form>
      </main>
    </Container>
  );
}

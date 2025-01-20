import { Link } from "react-router";

import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { NoteItem } from "../../components/NoteItem";
import { Section } from "../../components/Section";
import { Textarea } from "../../components/Textarea";
import { Container, Form } from "./styles";

export function NewNote() {
  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <h1>Create note</h1>
            <Link to="/">Return</Link>
          </header>

          <Input placeholder="Title" />

          <Textarea placeholder="Observations" />

          <Section title="Links">
            <NoteItem value="https://rocketseat.com.br" />
            <NoteItem isNew placeholder="New link" />
          </Section>

          <Section title="Tags">
            <div className="tags">
              <NoteItem value="React" />
              <NoteItem isNew placeholder="New tag" />
            </div>
          </Section>

          <Button title="Save" />
        </Form>
      </main>
    </Container>
  );
}

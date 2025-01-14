import { Header } from '../../components/Header';
import {
  Brand,
  Container,
  Content,
  Menu,
  NewNote,
  Search,
} from './styles';

export function Home() {
  return (
    <Container>
      <Brand>
        <h1>RocketNotes</h1>
      </Brand>

      <Header />

      <Menu></Menu>
      <Search></Search>
      <Content></Content>
      <NewNote></NewNote>
    </Container>
  );
}

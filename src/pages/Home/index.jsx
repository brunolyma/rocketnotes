import {
  FiPlus,
  FiSearch,
} from 'react-icons/fi';

import { ButtonText } from '../../components/ButtonText';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
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

      <Menu>
        <li>
          <ButtonText title="Todos" isActive />
        </li>
        <li>
          <ButtonText title="React" />
        </li>
        <li>
          <ButtonText title="NodeJS" />
        </li>
      </Menu>
      <Search>
        <Input placeholder="Pesquisar pelo titulo" icon={FiSearch} />
      </Search>
      <Content></Content>
      <NewNote>
        <FiPlus />
        Criar Nota
      </NewNote>
    </Container>
  );
}

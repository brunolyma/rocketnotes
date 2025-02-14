import {
  useEffect,
  useState,
} from 'react';

import {
  FiPlus,
  FiSearch,
} from 'react-icons/fi';

import { ButtonText } from '../../components/ButtonText';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Note } from '../../components/Note';
import { Section } from '../../components/Section';
import { api } from '../../services/api';
import {
  Brand,
  Container,
  Content,
  Menu,
  NewNote,
  Search,
} from './styles';

export function Home() {
  const [tags, setTags] = useState([]);
  const [tagsSelected, setTagsSelected] = useState([]);

  function handleTagSelected(tagName) {
    setTagsSelected((prevTagsSeleted) => {
      if (prevTagsSeleted.includes(tagName)) {
        return prevTagsSeleted.filter((tag) => tag !== tagName);
      } else {
        return [...prevTagsSeleted, tagName];
      }
    });
  }

  useEffect(() => {
    async function fetchTags() {
      const response = await api.get("/tags");
      setTags(response.data);
    }

    fetchTags();
  }, []);

  return (
    <Container>
      <Brand>
        <h1>RocketNotes</h1>
      </Brand>

      <Header />

      <Menu>
        <li>
          <ButtonText
            title="All"
            onClick={() => handleTagSelected("all")}
            isActive={tagsSelected.length === 0}
          />
        </li>
        {tags &&
          tags.map((tag) => {
            return (
              <li key={tag.id}>
                <ButtonText
                  title={tag.name}
                  onClick={() => handleTagSelected(tag.name)}
                  isActive={tagsSelected.includes(tag.name)}
                />
              </li>
            );
          })}
      </Menu>

      <Search>
        <Input placeholder="Search by title" icon={FiSearch} />
      </Search>

      <Content>
        <Section title="My notes">
          <Note
            data={{
              title: "React",
              tags: [
                { id: 1, name: "react" },
                { id: 2, name: "rocketseat" },
              ],
            }}
          />
        </Section>
      </Content>

      <NewNote to="/new">
        <FiPlus />
        Create a note
      </NewNote>
    </Container>
  );
}

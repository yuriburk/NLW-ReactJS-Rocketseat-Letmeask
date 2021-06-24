import { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';

import illustrationImg from '../../assets/images/illustration.svg';
import logoImg from '../../assets/images/logo.svg';
import useAuth from '../../hooks/useAuth';
import { database } from '../../services/firebase';
import {
  Container,
  AsideContainer,
  Image,
  Title,
  BoldText,
  Text,
  MainContent,
  MainContainer,
  Content,
  Button,
  Form,
  Input,
  Link,
  BottomText,
} from './styles';

export function NewRoom() {
  const { user } = useAuth();
  const history = useHistory();
  const [newRoom, setNewRoom] = useState('');

  async function handleCreateNewRoom(event: FormEvent) {
    event.preventDefault();

    if (newRoom.trim() === '') {
      return;
    }

    const roomRef = database.ref('rooms');

    const firebaseRoom = roomRef.push({
      title: newRoom,
      authorId: user?.id,
    });

    history.push(`/rooms/${firebaseRoom.key}`);
  }

  return (
    <Container>
      <AsideContainer>
        <Image
          src={illustrationImg}
          alt="Ilustração simbolizando perguntas e respostas"
        />
        <BoldText>{'Crie salas de Q&A ao vivo'}</BoldText>
        <Text>Tire as dúvidas da sua audiência em tempo real</Text>
      </AsideContainer>
      <MainContent>
        <MainContainer>
          <Content>
            <Image src={logoImg} alt="Letmeask" />
            <Title>Criar uma nova sala</Title>
          </Content>
          <Form onSubmit={handleCreateNewRoom}>
            <Input
              type="text"
              placeholder="Nome da sala"
              onChange={event => setNewRoom(event.target.value)}
              value={newRoom}
            />
            <Button type="submit">Criar sala</Button>
          </Form>
          <BottomText>
            Quer entrar em uma sala existente? <Link to="/">clique aqui</Link>
          </BottomText>
        </MainContainer>
      </MainContent>
    </Container>
  );
}

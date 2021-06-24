import { FormEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';

import illustrationImg from '../../assets/images/illustration.svg';
import logoImg from '../../assets/images/logo.svg';
import googleIconImg from '../../assets/images/google-icon.svg';
import useAuth from '../../hooks/useAuth';
import {
  Container,
  AsideContainer,
  Image,
  BoldText,
  Text,
  MainContent,
  MainContainer,
  Content,
  SocialButton,
  CenterContainer,
  Button,
  Form,
  Input,
} from './styles';
import { database } from '../../services/firebase';

export function Home() {
  const history = useHistory();
  const { user, signInWithGoogle } = useAuth();
  const [roomCode, setRoomCode] = useState('');

  async function handleCreateNewRoom() {
    if (!user) {
      await signInWithGoogle();
    }

    history.push('/rooms/new');
  }

  async function handleJoinRoom(event: FormEvent) {
    event.preventDefault();

    if (roomCode.trim() === '') {
      return;
    }

    const roomRef = await database.ref(`rooms/${roomCode}`).get();

    if (!roomRef.exists()) {
      alert('Room does not exists.');
      return;
    }

    history.push(`/rooms/${roomCode}`);
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
            <SocialButton onClick={handleCreateNewRoom}>
              <Image src={googleIconImg} alt="Logo do Google" />
              Crie sua sala com o Google
            </SocialButton>
          </Content>
          <CenterContainer>ou entre em uma sala</CenterContainer>
          <Form onSubmit={handleJoinRoom}>
            <Input
              type="text"
              placeholder="Digite o código da sala"
              onChange={event => setRoomCode(event.target.value)}
              value={roomCode}
            />
            <Button type="submit">Entrar</Button>
          </Form>
        </MainContainer>
      </MainContent>
    </Container>
  );
}

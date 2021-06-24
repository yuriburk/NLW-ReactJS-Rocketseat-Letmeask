import { FormEvent, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import { notifyError } from '../../App';
import logoImg from '../../assets/images/logo.svg';
import { Button } from '../../components/Button';
import { RoomCode } from '../../components/RoomCode';
import useAuth from '../../contexts/AuthContext';
import { database } from '../../services/firebase';
import {
  Container,
  Header,
  ContentContainer,
  Image,
  Main,
  RoomContainer,
  Title,
  QuestionsText,
  Form,
  FormTextarea,
  FooterContainer,
  UserInfo,
  UserName,
  FooterText,
  LoginButton,
} from './styles';

export function Room() {
  const { user } = useAuth();
  const history = useHistory();
  const params = useParams<{ id: string }>();
  const roomId = params.id;
  const [newQuestion, setNewQuestion] = useState('');

  async function handleCreateNewQuestion(event: FormEvent) {
    event.preventDefault();
    if (newQuestion.trim() === '') {
      return;
    }

    if (!user) {
      notifyError('You must be logged in');
      return;
    }

    const question = {
      content: newQuestion,
      author: {
        name: user.name,
        avatar: user.avatar,
      },
      isHighlighted: false,
      isAnswered: false,
    };

    database.ref(`rooms/${roomId}/questions`).push(question);
  }

  function navigateLogin() {
    history.push('/');
  }

  return (
    <Container>
      <Header>
        <ContentContainer>
          <Image src={logoImg} alt="Letmeask" />
          <RoomCode code={roomId} />
        </ContentContainer>
      </Header>

      <Main>
        <RoomContainer>
          <Title>Sala React</Title>
          <QuestionsText>4 perguntas</QuestionsText>
        </RoomContainer>

        <Form onSubmit={handleCreateNewQuestion}>
          <FormTextarea
            placeholder="O que você quer perguntar?"
            onChange={event => setNewQuestion(event.target.value)}
            value={newQuestion}
          />

          <FooterContainer>
            {user ? (
              <UserInfo>
                <Image src={user.avatar} alt={user.name} />
                <UserName>{user.name}</UserName>
              </UserInfo>
            ) : (
              <FooterText>
                Para enviar uma pergunta,{' '}
                <LoginButton onClick={navigateLogin}>
                  faça seu login.
                </LoginButton>
              </FooterText>
            )}

            <Button type="submit" disabled={!user}>
              Enviar pergunta
            </Button>
          </FooterContainer>
        </Form>
      </Main>
    </Container>
  );
}

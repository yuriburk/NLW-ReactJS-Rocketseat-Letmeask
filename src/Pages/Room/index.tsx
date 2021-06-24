import { useState, FormEvent } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import { notifyError } from '../../utils';
import logoImg from '../../assets/images/logo.svg';
import { Button } from '../../components/Button';
import { RoomCode } from '../../components/RoomCode';
import { Question } from '../../components/Question';
import useAuth from '../../hooks/useAuth';
import { database } from '../../services/firebase';
import useRoom from '../../hooks/useRoom';
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
  Avatar,
  UserName,
  FooterText,
  LoginButton,
  LikeButton,
} from './styles';
import { LikeIcon } from '../../components/LikeIcon';
import { UserQuestion } from '../../models';

export function Room() {
  const params = useParams<{ id: string }>();
  const roomId = params.id;

  const history = useHistory();

  const { user } = useAuth();

  const { questions, title } = useRoom(roomId);

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
    setNewQuestion('');
  }

  function navigateLogin() {
    history.push('/');
  }

  async function handleLikeQuestion(question: UserQuestion) {
    if (!user) {
      return;
    }

    console.log(question.likeId);
    if (question.likeId) {
      await database
        .ref(
          `rooms/${roomId}/questions/${question.id}/likes/${question.likeId}`,
        )
        .remove();
      return;
    }
    database.ref(`rooms/${roomId}/questions/${question.id}/likes`).push({
      authorId: user.id,
    });
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
          <Title>Sala {title}</Title>
          {questions.length > 0 && (
            <QuestionsText>
              {questions.length} pergunta{questions.length > 1 && 's'}
            </QuestionsText>
          )}
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
                <Avatar src={user.avatar} alt={user.name} />
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

        {questions.map(question => (
          <Question
            key={question.id}
            content={question.content}
            author={question.author}
          >
            <LikeButton
              onClick={() => handleLikeQuestion(question)}
              aria-label="Marcar como gostei"
            >
              {question.likesCount > 0 && question.likesCount}{' '}
              <LikeIcon liked={!!question.likeId} />
            </LikeButton>
          </Question>
        ))}
      </Main>
    </Container>
  );
}

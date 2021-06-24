import { useHistory, useParams } from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg';
import deleteImg from '../../assets/images/delete.svg';
import { Button } from '../../components/Button';
import { RoomCode } from '../../components/RoomCode';
import { Question } from '../../components/Question';
import { DeleteDialog } from '../../components/Dialog/Delete';
import { database } from '../../services/firebase';
import { useDialog } from '../../hooks/useDialog';
import useRoom from '../../hooks/useRoom';
import {
  Container,
  Header,
  ContentContainer,
  ButtonsContainer,
  Image,
  Main,
  RoomContainer,
  Title,
  QuestionsText,
  DeleteButton,
  RemoveIcon,
} from './styles';

export function AdminRoom() {
  const history = useHistory();

  const params = useParams<{ id: string }>();
  const roomId = params.id;

  const { handleOpenDialog } = useDialog();

  const { questions, title } = useRoom(roomId);

  async function handleDeleteQuestion(questionId: string) {
    handleOpenDialog(
      <DeleteDialog
        handleDelete={async () =>
          database.ref(`rooms/${roomId}/questions/${questionId}`).remove()
        }
      />,
    );
  }

  async function handleEndRoomId() {
    await database.ref(`rooms/${roomId}`).update({ endedAt: new Date() });
    history.push('/');
  }

  return (
    <Container>
      <Header>
        <ContentContainer>
          <Image src={logoImg} alt="Letmeask" />
          <ButtonsContainer>
            <RoomCode code={roomId} />
            <Button isOutlined onClick={handleEndRoomId}>
              Encerrar sala
            </Button>
          </ButtonsContainer>
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

        {questions.map(question => (
          <Question
            key={question.id}
            content={question.content}
            author={question.author}
          >
            <DeleteButton
              onClick={() => {
                handleDeleteQuestion(question.id);
              }}
            >
              <RemoveIcon src={deleteImg} alt="Remover pergunta" />
            </DeleteButton>
          </Question>
        ))}
      </Main>
    </Container>
  );
}

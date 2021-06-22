import { useHistory } from 'react-router-dom';

import { auth, firebase } from '../../services/firebase';
import illustrationImg from '../../assets/images/illustration.svg';
import logoImg from '../../assets/images/logo.svg';
import googleIconImg from '../../assets/images/google-icon.svg';
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

export function Home() {
  const history = useHistory();

  async function handleCreateNewRoom() {
    const provider = new firebase.auth.GoogleAuthProvider();

    await auth.signInWithPopup(provider);
    history.push('/rooms/new');
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
          <Form>
            <Input type="text" placeholder="Digite o código da sala" />
            <Button type="submit">Entrar</Button>
          </Form>
        </MainContainer>
      </MainContent>
    </Container>
  );
}

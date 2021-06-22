import illustrationImg from '../../assets/images/illustration.svg';
import logoImg from '../../assets/images/logo.svg';
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
          <Form>
            <Input type="text" placeholder="Nome da sala" />
            <Button type="submit">Criar sala</Button>
          </Form>
          <BottomText>
            Quer enrtar em uma sala existente? <Link to="/">clique aqui</Link>
          </BottomText>
        </MainContainer>
      </MainContent>
    </Container>
  );
}

import { Author } from '../../models';
import { FooterContainer } from '../../Pages/Room/styles';
import { Container, Footer, Text, Image, AuthorName } from './styles';

type QuestionProps = {
  content: string;
  author: Author;
};

export function Question({ content, author }: QuestionProps) {
  return (
    <Container>
      <Text>{content}</Text>
      <Footer>
        <FooterContainer>
          <Image src={author.avatar} alt={author.name} />
          <AuthorName>{author.name}</AuthorName>
        </FooterContainer>
      </Footer>
    </Container>
  );
}

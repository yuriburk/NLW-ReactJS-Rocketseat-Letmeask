import React from 'react';
import { Author } from '../../models';
import { FooterContainer } from '../../Pages/Room/styles';
import {
  Container,
  Footer,
  Text,
  AuthorContainer,
  Image,
  AuthorName,
  ButtonsContainer,
} from './styles';

type QuestionProps = {
  content: string;
  author: Author;
  children?: React.ReactChild;
};

export function Question({ content, author, children }: QuestionProps) {
  return (
    <Container>
      <Text>{content}</Text>
      <Footer>
        <FooterContainer>
          <AuthorContainer>
            <Image src={author.avatar} alt={author.name} />
            <AuthorName>{author.name}</AuthorName>
          </AuthorContainer>
          <ButtonsContainer>{children}</ButtonsContainer>
        </FooterContainer>
      </Footer>
    </Container>
  );
}

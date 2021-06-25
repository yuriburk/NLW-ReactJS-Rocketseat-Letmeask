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
  isAnswered?: boolean;
  isHighlighted?: boolean;
  children?: React.ReactChild;
};

export function Question({
  content,
  author,
  isAnswered,
  isHighlighted,
  children,
}: QuestionProps) {
  return (
    <Container
      isAnswered={isAnswered}
      isHighlighted={isHighlighted && !isAnswered}
    >
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

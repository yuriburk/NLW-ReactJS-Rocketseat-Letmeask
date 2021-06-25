import styled, { css } from 'styled-components';

export const Container = styled.div<{
  isAnswered?: boolean;
  isHighlighted?: boolean;
}>`
  background: #fefefe;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
  padding: 24px;

  & + & {
    margin-top: 8px;
  }

  ${props =>
    props.isAnswered &&
    css`
      background: #dbdcdd;
    `}

  ${props =>
    props.isHighlighted &&
    css`
      background: #f4f0ff;
      border: 1px solid #835adf;
    `}
`;

export const Text = styled.p`
  color: #29292e;
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 24px;
`;

export const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const AuthorContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-items: center;
`;

export const Image = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;

export const AuthorName = styled.span`
  margin-left: 8px;
  color: #737380;
  font-size: 14px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 16px;

  button {
    border: 0;
    background: transparent;
    cursor: pointer;
    transition: filter 0.2s;
    &:hover {
      filter: brightness(0.8);
    }
  }
`;

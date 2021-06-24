import styled from 'styled-components';

import { Button as StyledButton } from '../../components/Button';

export const Container = styled.div`
  display: flex;
  align-items: stretch;
  height: 100vh;
`;

export const AsideContainer = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 45%;
  padding: 120px 80px;
  background: #835afd;
  color: #fff;

  img {
    max-width: 320px;
  }
`;

export const Image = styled.img``;

export const BoldText = styled.strong`
  font: 700 36px 'Poppins', sans-serif;
  line-height: 42px;
  margin-top: 16px;
`;

export const Text = styled.p`
  font-size: 24px;
  line-height: 32px;
  margin-top: 16px;
  color: #f8f8f8;
`;

export const MainContent = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 55%;
  padding: 0 32px;
`;

export const MainContainer = styled.div`
  width: 100%;
  max-width: 320px;
  align-items: stretch;
  text-align: center;

  > img {
    align-self: center;
  }
`;

export const Content = styled.div``;

export const CenterContainer = styled.div`
  font-size: 14px;
  color: #a8a8b3;

  margin: 32px 0;
  display: flex;
  align-items: center;

  &::before {
    content: '';
    flex: 1;
    height: 1px;
    background: #a8a8b3;
    margin-right: 16px;
  }

  &::after {
    content: '';
    flex: 1;
    height: 1px;
    background: #a8a8b3;
    margin-left: 16px;
  }
`;

export const SocialButton = styled(StyledButton)`
  margin-top: 64px;
  background: #ea4335;
  width: 100%;
`;

export const Button = styled(StyledButton)`
  margin-top: 16px;
  width: 100%;
`;

export const Form = styled.form``;

export const Input = styled.input`
  height: 50px;
  border-radius: 8px;
  padding: 0 16px;
  background: #fff;
  border: 1px solid #a8a8b3;
  width: 100%;
  outline-color: #a8a8b3;
`;

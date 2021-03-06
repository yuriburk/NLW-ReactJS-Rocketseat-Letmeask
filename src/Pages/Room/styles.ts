import styled from 'styled-components';

export const Container = styled.div``;

export const Header = styled.header`
  padding: 24px;
  border-bottom: 1px solid #e2e2e2;
`;

export const ContentContainer = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Image = styled.img`
  max-height: 45px;
`;

export const Main = styled.main`
  max-width: 800px;
  margin: 0 auto;
`;

export const RoomContainer = styled.div`
  margin: 32px 0 24px;
  display: flex;
  align-items: center;
`;

export const Title = styled.h1`
  font-family: 'Poppins', sans-serif;
  font-size: 24px;
  color: #29292e;
`;

export const QuestionsText = styled.span`
  margin-left: 16px;
  background: #e559f9;
  border-radius: 9999px;
  padding: 8px 16px;
  color: #fff;
  font-weight: 500;
  font-size: 14px;
`;

export const Form = styled.form`
  margin-bottom: 32px;
`;

export const FormTextarea = styled.textarea`
  width: 100%;
  border: 0;
  padding: 16px;
  border-radius: 8px;
  background: #fefefe;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
  resize: vertical;
  min-height: 130px;
`;

export const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
  width: 100%;
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const Avatar = styled.img`
  height: 32px;
  width: 32px;
  border-radius: 50%;
`;

export const UserName = styled.span`
  margin-left: 8px;
  color: #29292e;
  font-weight: 500;
  font-size: 14px;
`;

export const FooterText = styled.span`
  font-size: 14px;
  color: #737380;
  font-weight: 500;
`;

export const LoginButton = styled.button`
  background: transparent;
  border: 0;
  color: #835afd;
  text-decoration: underline;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
`;

export const LikeButton = styled.button`
  display: flex;
  align-items: flex-end;
  color: #835afd;
  gap: 8px;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.8);
  }
`;

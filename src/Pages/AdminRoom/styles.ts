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

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
  & > button {
    height: 40px;
  }
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

export const DeleteButton = styled.button``;

export const RemoveIcon = styled.img``;

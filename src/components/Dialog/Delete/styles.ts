import styled from 'styled-components';
import { shade } from 'polished';

import { Button } from '../../Button';

export const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  height: 100%;
`;

export const Image = styled.img``;

export const Text = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 20px;
`;

export const Title = styled.h1`
  margin-bottom: 20px;
`;

export const Question = styled.p`
  color: gray;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const CloseButton = styled(Button)`
  width: 168px;
  font-size: 18px;
  color: black;
  background-color: #fff;
  border: 1px solid gray;
  &:hover {
    background-color: ${shade(0.1, '#fff')};
  }
`;

export const DeleteButton = styled(Button)`
  width: 168px;
  font-size: 18px;
  box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.2);
  background-color: red;
  &:hover {
    background-color: ${shade(0.1, 'red')};
  }
`;

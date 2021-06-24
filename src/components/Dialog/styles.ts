import styled from 'styled-components';
import { animated } from 'react-spring';

export const Container = styled(animated.div)``;

export const ContentContainer = styled(animated.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.2);
  background-color: #fff;
  z-index: 9999;
`;

export const Background = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.4);
`;

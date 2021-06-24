import copyImg from '../../assets/images/copy.svg';

import { RoomButton, Container, Image, Text } from './styles';

type RoomCodeProps = {
  code: string;
};

export function RoomCode({ code }: RoomCodeProps) {
  function copyRoomCodeToClipboard() {
    navigator.clipboard.writeText(code);
  }

  return (
    <RoomButton onClick={copyRoomCodeToClipboard}>
      <Container>
        <Image src={copyImg} alt="Copy code" />
      </Container>
      <Text>Sala #{code}</Text>
    </RoomButton>
  );
}

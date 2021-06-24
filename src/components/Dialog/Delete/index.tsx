import { useCallback } from 'react';
import { useSpring } from 'react-spring';

import Dialog from '..';
import { useDialog } from '../../../hooks/useDialog';
import deleteImg from '../../../assets/images/delete.svg';
import {
  Flex,
  Image,
  Text,
  Title,
  Question,
  ButtonsContainer,
  CloseButton,
  DeleteButton,
} from './styles';

export function DeleteDialog({
  handleDelete,
}: {
  handleDelete(): Promise<void>;
}) {
  const { handleCloseDialog } = useDialog();

  const contentProps = useSpring({
    from: { height: '0px', width: '0px' },
    to: { height: '450px', width: '840px' },
  });

  const handleDeleteClick = useCallback(async () => {
    await handleDelete();
    handleCloseDialog();
  }, [handleDelete, handleCloseDialog]);

  return (
    <Dialog handleClose={handleCloseDialog} contentProps={contentProps}>
      <Flex>
        <Image src={deleteImg} alt="" />
        <Text>
          <Title>Excluir pergunta</Title>
          <Question>
            Tem certeza que você deseja excluir essa pergunta?
          </Question>
        </Text>
        <ButtonsContainer>
          <CloseButton onClick={handleCloseDialog}>Cancelar</CloseButton>
          <DeleteButton onClick={handleDeleteClick}>Sim, excluir</DeleteButton>
        </ButtonsContainer>
      </Flex>
    </Dialog>
  );
}

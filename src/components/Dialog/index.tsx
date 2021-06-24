import { useSpring } from 'react-spring';

import { Container, ContentContainer, Background } from './styles';

type DialogProps = {
  handleClose(): void;
  contentProps?: any;
};

const Dialog: React.FC<DialogProps> = ({
  handleClose,
  contentProps,
  children,
  ...rest
}) => {
  const opacityProps = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
  });

  return (
    <Container data-testid="Dialog-Container" style={opacityProps}>
      <ContentContainer style={contentProps} {...rest}>
        {children}
      </ContentContainer>

      <Background onClick={handleClose} />
    </Container>
  );
};

export default Dialog;

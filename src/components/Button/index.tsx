import { ButtonHTMLAttributes } from 'react';

import { StyledButton } from './styles';

export function Button(
  props: ButtonHTMLAttributes<HTMLButtonElement> & { className?: string },
) {
  return <StyledButton {...props} />;
}

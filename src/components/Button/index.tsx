import { ButtonHTMLAttributes } from 'react';

import { StyledButton } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
  isOutlined?: boolean;
};

export function Button({ isOutlined, ...props }: ButtonProps) {
  return <StyledButton isOutlined={isOutlined} {...props} />;
}

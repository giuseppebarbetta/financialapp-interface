import { ComponentProps } from 'react';

import { Container } from './styles';

type ButtonProps = ComponentProps<'button'> & {
  variant?: 'default' | 'outline';
};

export function Button({
  children,
  variant = 'default',
  ...props
}: ButtonProps) {
  return (
    <Container $variant={variant} {...props}>
      {children}
    </Container>
  );
}

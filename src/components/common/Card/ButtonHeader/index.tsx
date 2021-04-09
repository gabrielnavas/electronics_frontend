import React from 'react';

import { Container } from './styles';

type Props = {
  children: React.ReactNode | React.ReactNode[] | string
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined
}

const ButtonHeader = ({ children, onClick }: Props) => (
  <Container onClick={onClick}>
    {children}
  </Container>
);

export default ButtonHeader;

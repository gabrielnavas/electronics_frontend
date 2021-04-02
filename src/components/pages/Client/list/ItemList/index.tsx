import React from 'react';

import {
  Container,
  AttributeName,
  AttributeEmail,
  Actions,
  ButtonDelete,
} from './styles';

type Props = {
  name: string
  email: string
}

export default ({ name, email }: Props) => (
  <Container>
    <AttributeName>{name}</AttributeName>
    <AttributeEmail>{email}</AttributeEmail>
    <Actions>
      <ButtonDelete><span>Remove</span></ButtonDelete>
    </Actions>
  </Container>
);

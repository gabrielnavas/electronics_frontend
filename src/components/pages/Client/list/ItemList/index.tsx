import React from 'react';

import {
  Container,
  Selectable,
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
    <Selectable>
      <AttributeName>{name}</AttributeName>
      <AttributeEmail>{email}</AttributeEmail>
    </Selectable>
    <Actions>
      <ButtonDelete><span>Remove</span></ButtonDelete>
    </Actions>
  </Container>
);

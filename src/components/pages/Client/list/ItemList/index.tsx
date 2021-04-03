import React from 'react';
import { useHistory } from 'react-router-dom';
import { ClientModel } from '../../../../../domain/models/client';
import paths from '../../../../../routes/paths';

import {
  Container,
  Selectable,
  AttributeName,
  AttributeEmail,
  Actions,
  ButtonDelete,
} from './styles';

type Props = {
  client: ClientModel
}

export default ({ client }: Props) => {
  const history = useHistory();

  const handleRemoveOnClick = React.useCallback(() => {
  }, []);

  const handleViewOnClick = React.useCallback(() => {
    history.push({
      pathname: paths.CLIENT_CREATE,
      state: client,
    });
  }, []);

  return (
    <Container>
      <Selectable onClick={handleViewOnClick}>
        <AttributeName>{client.name}</AttributeName>
        <AttributeEmail>{client.email}</AttributeEmail>
      </Selectable>
      <Actions>
        <ButtonDelete
          onClick={handleRemoveOnClick}
        >
          <span>Remove</span>
        </ButtonDelete>
      </Actions>
    </Container>
  );
};

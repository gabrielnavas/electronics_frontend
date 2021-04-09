import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { ClientModel } from '../../../../domain/models/client';
import { createOne as createOneClienteAPI } from '../../../../infra/api/client/create-one';

import Card from '../../../common/Card';

import {
  Wrapper,
} from '../../../common/styles/Wrapper';

import {
  Form,
  InputGroup,
  InputTitle,
  Input,
  ErrorInput,
  ButtonGroup,
  Button,
} from './styles';

import pathsPages from '../../../../routes/paths';
import ButtonHeader from '../../../common/Card/ButtonHeader';

export default () => {
  const [id, setId] = React.useState('');
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [passwordConfirmation, setPasswordConfirmation] = React.useState('');

  const location = useLocation<ClientModel>();
  const history = useHistory();

  React.useEffect(() => {
    if (location.state) {
      setId(location.state.id ? location.state.id : '');
      setName(location.state.name);
      setEmail(location.state.email);
    }
  }, [id, name, email, password]);

  const handleCreateClient = React.useCallback(() => {
    (async () => {
      await createOneClienteAPI({
        name,
        email,
        password,
        passwordConfirmation,
      });
      setName('');
      setEmail('');
      setPassword('');
      setPasswordConfirmation('');
    })();
  }, [createOneClienteAPI, name, email, password, passwordConfirmation]);

  return (
    <Wrapper>
      <Card
        buttonsRightHeader={(
          <ButtonHeader onClick={() => history.push(pathsPages.CLIENT_LIST)}>
            Back from list
          </ButtonHeader>
        )}
        titleName={
          id.length > 0 ? 'Edit a client' : 'Create a client'
        }
      >
        <Form>
          <InputGroup>
            <InputTitle>name</InputTitle>
            <Input
              type="text"
              value={name}
              autoFocus
              placeholder="example: Jonny cage.."
              onChange={(e) => setName(e.target.value)}
            />
            <ErrorInput>any error...</ErrorInput>
          </InputGroup>
          <InputGroup>
            <InputTitle>email</InputTitle>
            <Input
              type="email"
              value={email}
              placeholder="Jonnycage@gmail.com"
              onChange={(e) => setEmail(e.target.value)}
            />
            <ErrorInput>any error...</ErrorInput>
          </InputGroup>
          <InputGroup>
            <InputTitle>Password</InputTitle>
            <Input
              type="password"
              value={password}
              placeholder="***********"
              onChange={(e) => setPassword(e.target.value)}
            />
            <ErrorInput>any error...</ErrorInput>
          </InputGroup>
          <InputGroup>
            <InputTitle>Password confirmation</InputTitle>
            <Input
              onKeyDown={(e) => e.key === 'Enter' && handleCreateClient()}
              type="password"
              value={passwordConfirmation}
              placeholder="***********"
              onChange={(e) => setPasswordConfirmation(e.target.value)}
            />
            <ErrorInput>any error...</ErrorInput>
          </InputGroup>
          <ButtonGroup>
            <Button
              onClick={handleCreateClient}
            >
              { id.length > 0 ? 'Edit' : 'Create'}
            </Button>

          </ButtonGroup>
        </Form>
      </Card>
    </Wrapper>
  );
};

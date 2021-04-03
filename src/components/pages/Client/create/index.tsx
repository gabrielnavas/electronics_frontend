import React from 'react';
import { useLocation } from 'react-router-dom';
import { ClientModel } from '../../../../domain/models/client';

import {
  Card,
  CardTitle,
} from '../../../common/styles/Card';

import {
  Wrapper,
} from '../../../common/styles/Wrapper';

import {
  InputGroup,
  InputTitle,
  Input,
  ErrorInput,
  Button,
} from './styles';

// type Props = {
//   // eslint-disable-next-line react/require-default-props
//   client?: ClientModel
// }

export default () => {
  const [id, setId] = React.useState('');
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const location = useLocation<ClientModel>();

  React.useEffect(() => {
    if (location.state) {
      setId(location.state.id ? location.state.id : '');
      setName(location.state.name);
      setEmail(location.state.email);
    }
  }, [id, name, email, password]);

  return (
    <Wrapper>
      <Card>
        <CardTitle>{ id.length > 0 ? 'Edit a client' : 'Create a client'}</CardTitle>
        <InputGroup>
          <InputTitle>name</InputTitle>
          <Input type="text" value={name} autoFocus placeholder="example: Jonny cage.." onChange={(e) => setName(e.target.value)} />
          <ErrorInput>any error...</ErrorInput>
        </InputGroup>
        <InputGroup>
          <InputTitle>email</InputTitle>
          <Input type="email" value={email} placeholder="Jonnycage@gmail.com" onChange={(e) => setEmail(e.target.value)} />
          <ErrorInput>any error...</ErrorInput>
        </InputGroup>
        <InputGroup>
          <InputTitle>Password</InputTitle>
          <Input type="password" value={password} placeholder="***********" onChange={(e) => setPassword(e.target.value)} />
          <ErrorInput>any error...</ErrorInput>
        </InputGroup>
        <Button>{ id.length > 0 ? 'Edit' : 'Create'}</Button>
      </Card>
    </Wrapper>
  );
};

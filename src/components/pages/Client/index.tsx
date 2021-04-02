import React from 'react';

import {
  Wrapper,
  Card,
  CardTitle,
  InputGroup,
  InputTitle,
  Input,
  ErrorInput,
  Button,
} from './styles';

export default () => (
  <Wrapper>
    <Card>
      <CardTitle>Create a client</CardTitle>
      <InputGroup>
        <InputTitle>Name</InputTitle>
        <Input type="text" autoFocus placeholder="example: Jonny cage.." />
        <ErrorInput>any error...</ErrorInput>
      </InputGroup>
      <InputGroup>
        <InputTitle>Email</InputTitle>
        <Input type="email" placeholder="Jonnycage@gmail.com" />
        <ErrorInput>any error...</ErrorInput>
      </InputGroup>
      <InputGroup>
        <InputTitle>Password</InputTitle>
        <Input type="password" placeholder="***********" />
        <ErrorInput>any error...</ErrorInput>
      </InputGroup>
      <Button>Create</Button>
    </Card>
  </Wrapper>
);

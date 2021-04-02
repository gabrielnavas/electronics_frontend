import React from 'react';

import {
  Card,
  CardTitle,
} from '../../../common/styles/Card';

import {
  Wrapper,
} from '../../../common/styles/Wrapper';

import ItemList from './ItemList';

import {
  List,
} from './styles';

export default () => (
  <Wrapper>
    <Card>
      <CardTitle>Clients List</CardTitle>
      <List>
        <ItemList name="Gabriel" email="gabriel@email.comaaaa" />
        <ItemList name="Gabriel" email="gabrieaaaaaaaaaaaaaaaaaaaal@email.com" />
        <ItemList name="Gabriel" email="gabriel@emaiaaal.com" />
        <ItemList name="Gabriel" email="gabriel@email.com" />
        <ItemList name="Gabriel" email="gabriel@emaiaaaal.com" />
        <ItemList name="Gabriel" email="gabriel@email.com" />
      </List>
    </Card>
  </Wrapper>
);

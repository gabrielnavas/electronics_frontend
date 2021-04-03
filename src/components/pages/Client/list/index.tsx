import React from 'react';
import { ClientModel } from '../../../../domain/models/client';
import { getAll } from '../../../../infra/api/client';

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

export default () => {
  const [clients, setClients] = React.useState([] as ClientModel[]);

  React.useEffect(() => {
    (async () => {
      const resultClients = await getAll();
      setClients(resultClients);
    })();
  }, []);

  return (
    <Wrapper>
      <Card>
        <CardTitle>Clients List</CardTitle>
        <List>
          { clients.map((client) => <ItemList key={client.id} client={client} />)}
        </List>
      </Card>
    </Wrapper>
  );
};

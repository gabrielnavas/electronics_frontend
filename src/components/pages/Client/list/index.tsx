import React from 'react';
import { ClientModel } from '../../../../domain/models/client';
import { getAll } from '../../../../infra/api/client/get-all';
import { getAllWithFilters } from '../../../../infra/api/client/get-all-with-filters';

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
  EmptyList,
  SearchContainer,
  InputGroup,
  Input,
  ErrorSearchInput,
  ButtonSearch,
  IconSearch,
  IconLoadingWait,
} from './styles';

export default () => {
  const [clients, setClients] = React.useState([] as ClientModel[]);
  const [searchInput, setSearchInput] = React.useState('');
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [errorSearchInput, setErrorSearchInput] = React.useState('');

  React.useEffect(() => {
    handleEmptySearchInput();
  }, [getAll]);

  const handleEmptySearchInput = React.useCallback(() => {
    setIsLoading(true);
    getAll().then((resultClients) => {
      setClients(resultClients);
      setIsLoading(false);
    });
  }, [setIsLoading, setClients]);

  const handleOnButtonSearch = React.useCallback(() => {
    (async () => {
      if (searchInput.length === 0) {
        handleEmptySearchInput();
      } else {
        try {
          setIsLoading(true);
          getAllWithFilters({
            name: searchInput,
            email: searchInput,
          }).then((clientsResult) => {
            setClients(clientsResult);
            setIsLoading(false);
          });
        } catch (error) {
          setErrorSearchInput('Não foi possível, tente novamente mais tarde');
        }
      }
    })();
  }, [getAllWithFilters, getAll, searchInput]);

  return (
    <Wrapper>
      <Card>
        <CardTitle>Clients List</CardTitle>
        <SearchContainer>
          <InputGroup>
            <Input
              placeholder="search: name, email..."
              autoFocus
              onChange={(e) => setSearchInput(e.target.value)}
              value={searchInput}
              onKeyDown={(e) => e.key === 'Enter' && handleOnButtonSearch()}
            />
            <ButtonSearch onClick={handleOnButtonSearch}>
              { isLoading
                ? <IconLoadingWait />
                : <IconSearch />}
            </ButtonSearch>
          </InputGroup>
          <ErrorSearchInput>{errorSearchInput}</ErrorSearchInput>
        </SearchContainer>
        <List>
          { clients.length > 0
            ? clients.map((client) => (
              <ItemList
                key={client.id}
                client={client}
              />
            ))
            : <EmptyList>Empty list.</EmptyList>}
        </List>
      </Card>
    </Wrapper>
  );
};

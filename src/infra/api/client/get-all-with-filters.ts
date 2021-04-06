import { ClientModel } from '../../../domain/models/client';
import { endpoint } from '../paths';

type Params = Omit<ClientModel, 'id'>
type Result = ClientModel[]

export const getAllWithFilters = async (client: Params): Promise<Result> => {
  const response = await fetch(`
      ${endpoint}/client/filters?name=${client.name}&email=${client.name}`);
  const json = await response.json();
  return json;
};

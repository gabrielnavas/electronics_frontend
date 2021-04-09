import { ClientModel } from '../../../domain/models/client';
import { endpoint } from '../paths';

type Params = Omit<ClientModel, 'id'> & {passwordConfirmation: string}
type Result = ClientModel

export const createOne = async (params: Params): Promise<Result> => {
  const response = await fetch(`${endpoint}/client`, {
    body: JSON.stringify(params),
  });
  const json = await response.json();
  return json;
};

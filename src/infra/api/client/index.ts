import { ClientModel } from '../../../domain/models/client';
import { endpoint } from '../paths';

export const getAll = async (): Promise<ClientModel[]> => {
  const response = await fetch(`${endpoint}/client`);
  const json = await response.json();
  return json;
};

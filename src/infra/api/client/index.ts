import { endpoint } from '../routes';

export type Client = {
  id: number
  name: string,
  email: string
}

export const getAll = async (): Promise<Client[]> => {
  const response = await fetch(`${endpoint}/client`);
  const json = await response.json();
  return json;
};

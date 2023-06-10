import fetch from 'node-fetch';

import { SERVICE_SERVERS } from '../constants';

export async function interstateTransitionRoute(id: string): Promise<any> {
  const response = await fetch(`${SERVICE_SERVERS.interstateTransitions}/analitics/${id}`);
  const data = await response.json();

  return data;
}

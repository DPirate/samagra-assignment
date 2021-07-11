import { ParsedUrlQueryInput } from 'querystring';
import { stringify } from 'querystring';
import { API_PATHS, API_URL } from './api.config';

export interface IApiInput<TBody> {
  path: keyof typeof API_PATHS;
  body?: TBody;
  query?: ParsedUrlQueryInput;
  method: 'get' | 'post' | 'put' | 'patch' | 'delete';
  baseUrl?: string;
}

export async function api<TResult, TBody>({
  path,
  body,
  query = undefined,
  method,
  baseUrl = API_URL,
}: IApiInput<TBody>): Promise<TResult> {
  let token: boolean;
  // mock fetching auth token
  token = (() => false)();

  const options = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      ...(token && {
        Authorization: `Bearer ${token}`,
      }),
    },
    method: method,
    ...(body && { body: JSON.stringify(body) }),
  };

  try {
    const pathWithQuery = [path, query ? stringify(query) : undefined]
      .filter(isDefined => isDefined)
      .join('?');

    const url = new URL(pathWithQuery, baseUrl);

    console.log(`CALLING ${url.href}`);
    const resp = await fetch(url.href, options);
    const json = await resp.json();
    return json;
  } catch (error) {
    return error;
  }
}

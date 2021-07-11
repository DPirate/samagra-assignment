import moment, { MomentInput } from 'moment';

export interface ITimedResponse {
  start: MomentInput;
  end: MomentInput;
  response: undefined;
}

export async function withTimeLog(fn: Function): Promise<ITimedResponse> {
  const start = moment();
  const response = await fn();
  const end = moment();

  return {
    start,
    end,
    response,
  };
}

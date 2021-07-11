import moment from 'moment';
import { useQuery } from 'react-query';
import { api } from '../../api/api';
import { API_PATHS, QueryKeys } from '../../api/api.config';
import { ITimerAnalyticsData } from '../../features/home/components/ApiTimerAnalytics';
import { withTimeLog } from '../../utils';

export function useAppGetTodosQuery() {
  return useQuery(QueryKeys.GetTodo, async (): Promise<ITimerAnalyticsData> => {
    const {
      start,
      end,
      response: apiResponse,
    } = await withTimeLog(() => api({ path: API_PATHS.Todos, method: 'get' }));

    const {
      start: startSave,
      end: endSave,
      response: dbReponse,
    } = {
      start: moment(),
      end: moment(),
      response: 'dummy',
    };

    return {
      start,
      end,
      endSave,
      startSave,
    };
  });
}

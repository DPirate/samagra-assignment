import { set } from 'idb-keyval';
import { useQuery } from 'react-query';
import { api } from '../../api/api';
import { API_PATHS, QueryKeys } from '../../api/api.config';
import { ITimerAnalyticsData } from '../../features/home/components/ApiTimerAnalytics';
import { DbKeys } from '../../store/indexedDb.config';
import { withTimeLog } from '../../utils';

export function useAppGetTodosQuery() {
  return useQuery(QueryKeys.GetTodo, async (): Promise<ITimerAnalyticsData> => {
    const {
      start,
      end,
      response: apiResponse,
    } = await withTimeLog(() => api({ path: 'Todos', method: 'get' }));

    const {
      start: startSave,
      end: endSave,
      response: dbReponse,
    } = await withTimeLog(() => set(DbKeys.Todos, apiResponse));

    return {
      start,
      end,
      endSave,
      startSave,
    };
  });
}

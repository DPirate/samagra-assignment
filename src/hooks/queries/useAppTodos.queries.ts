import { useQuery } from 'react-query';
import { api } from '../../api/api';
import { API_PATHS, QueryKeys } from '../../api/api.config';

export function useAppGetTodosQuery() {
  return useQuery(QueryKeys.GetTodo, () => {
    return api({ path: API_PATHS.Todos, method: 'get' });
  });
}

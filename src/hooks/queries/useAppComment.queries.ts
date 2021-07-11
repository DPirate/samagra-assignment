import { useQuery } from 'react-query';
import { api } from '../../api/api';
import { API_PATHS, QueryKeys } from '../../api/api.config';

export function useAppGetCommentsQuery() {
  return useQuery(QueryKeys.GetComments, () => {
    return api({ path: API_PATHS.Comments, method: 'get' });
  });
}

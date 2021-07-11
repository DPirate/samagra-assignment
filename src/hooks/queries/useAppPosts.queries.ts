import { useQuery } from 'react-query';
import { api } from '../../api/api';
import { API_PATHS, QueryKeys } from '../../api/api.config';

export function useAppGetPostsQuery() {
  return useQuery(QueryKeys.GetPosts, () => {
    return api({ path: 'Posts', method: 'get' });
  });
}

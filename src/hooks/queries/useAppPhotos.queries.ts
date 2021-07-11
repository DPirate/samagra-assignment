import { useQuery } from 'react-query';
import { api } from '../../api/api';
import { API_PATHS, QueryKeys } from '../../api/api.config';

export function useAppGetPhotosQuery() {
  return useQuery(QueryKeys.GetPhotos, () => {
    return api({ path: API_PATHS.Photos, method: 'get' });
  });
}

import { Button } from '../../../components';
import {
  useAppGetCommentsQuery,
  useAppGetPhotosQuery,
  useAppGetTodosQuery,
} from '../../../hooks/queries';

export function ApiAnalytics() {
  const { data: todosData } = useAppGetTodosQuery();
  const { data: commentsData } = useAppGetCommentsQuery();
  const { data: photosData } = useAppGetPhotosQuery();
  console.log(photosData);
  return (
    <div>
      <Button title="Get All" />
    </div>
  );
}

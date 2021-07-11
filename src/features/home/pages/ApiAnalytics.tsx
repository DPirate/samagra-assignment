import { Button } from '../../../components';
import {
  useAppGetCommentsQuery,
  useAppGetPhotosQuery,
  useAppGetPostsQuery,
  useAppGetTodosQuery,
} from '../../../hooks/queries';
import { ApiTimerAnalytics } from '../components/ApiTimerAnalytics';

export function ApiAnalytics() {
  const { data: todosData } = useAppGetTodosQuery();
  const { data: commentsData } = useAppGetCommentsQuery();
  const { data: photosData } = useAppGetPhotosQuery();
  const { data: postsData } = useAppGetPostsQuery();
  console.log(photosData);
  return (
    <div>
      <ApiTimerAnalytics data={todosData} />
      <Button title="Get All" />
    </div>
  );
}

import { Button } from '../../../components';
import { useAppGetTodosQuery } from '../../../hooks/queries';
import { useAppGetCommentsQuery } from '../../../hooks/queries/useAppComment.queries';

export function ApiAnalytics() {
  const { data: todosData } = useAppGetTodosQuery();
  const { data: commentsData } = useAppGetCommentsQuery();
  console.log(commentsData);
  return (
    <div>
      <Button title="Get All" />
    </div>
  );
}

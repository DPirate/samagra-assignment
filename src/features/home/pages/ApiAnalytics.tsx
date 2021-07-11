import { useEffect, useState } from 'react';
import { apiSaveWithTimeLog } from '../../../api/api';
import { Button } from '../../../components';
import { Timer } from '../../../components/Timer';

import {
  ApiTimerAnalytics,
  ITimerAnalyticsData,
} from '../components/ApiTimerAnalytics';

export function ApiAnalytics() {
  const [todosLog, setTodosLog] = useState<ITimerAnalyticsData>();
  const [commentsLog, setCommentsLog] = useState<ITimerAnalyticsData>();
  const [photosLog, setPhotosLog] = useState<ITimerAnalyticsData>();
  const [postsLog, setPostsLog] = useState<ITimerAnalyticsData>();

  useEffect(() => {
    setTimeout(() => {
      getTodosTimeLog();
      getCommentsTimeLog();
      getPhotosTimeLog();
      getPostsTimeLog();
    }, 5000);
  }, []);

  async function getTodosTimeLog() {
    const timeLog = await apiSaveWithTimeLog({
      dbKey: 'Todos',
      method: 'get',
      path: 'Todos',
    });
    setTodosLog(timeLog);
  }
  async function getCommentsTimeLog() {
    const timeLog = await apiSaveWithTimeLog({
      dbKey: 'Comments',
      method: 'get',
      path: 'Comments',
    });
    setCommentsLog(timeLog);
  }
  async function getPhotosTimeLog() {
    const timeLog = await apiSaveWithTimeLog({
      dbKey: 'Photos',
      method: 'get',
      path: 'Photos',
    });
    setPhotosLog(timeLog);
  }
  async function getPostsTimeLog() {
    const timeLog = await apiSaveWithTimeLog({
      dbKey: 'Posts',
      method: 'get',
      path: 'Posts',
    });
    setPostsLog(timeLog);
  }

  return (
    <div>
      <ApiTimerAnalytics data={todosLog} />
      <ApiTimerAnalytics data={commentsLog} />
      <ApiTimerAnalytics data={photosLog} />
      <ApiTimerAnalytics data={postsLog} />
      <Button title="Get Todos" onClick={getTodosTimeLog} />
      <Timer />
    </div>
  );
}

import { useEffect, useState } from 'react';
import { apiSaveWithTimeLog } from '../../../api/api';
import { Button } from '../../../components';
import { Timer } from '../../../components/Timer';
import './ApiAnalytics.css';
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
    <div className="container">
      {/* header */}
      <div className="header">Test app</div>
      {/* api logs section */}
      <div className="api-calls">
        <ApiTimerAnalytics data={todosLog} />
        <ApiTimerAnalytics data={commentsLog} />
      </div>
      <div className="api-calls">
        <ApiTimerAnalytics data={photosLog} />
        <ApiTimerAnalytics data={postsLog} />
      </div>
      {/* buttons  */}
      <div className="buttons">
        <Button title="Get Todos" onClick={getTodosTimeLog} />
        <Button title="Get Comments" onClick={getCommentsTimeLog} />
        <Button title="Get Photos" onClick={getPhotosTimeLog} />
        <Button title="Get Posts" onClick={getPostsTimeLog} />

        <Timer />
      </div>
    </div>
  );
}

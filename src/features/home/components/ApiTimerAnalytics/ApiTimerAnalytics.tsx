import moment from 'moment';
import './ApiTimerAnalytics.css';
export interface ITimerAnalyticsData {
  start: moment.Moment;
  end: moment.Moment;
  startSave: moment.Moment;
  endSave: moment.Moment;
}

export function ApiTimerAnalytics({ data }: { data?: ITimerAnalyticsData }) {
  return (
    <div className="api-call">
      <span>start: {data?.start?.format('hh:mm:ss')}</span>
      <span>end: {data?.end?.format('hh:mm:ss')}</span>
      <span>startSave: {data?.startSave?.format('hh:mm:ss')}</span>
      <span>endSave: {data?.endSave?.format('hh:mm:ss')}</span>
    </div>
  );
}

import moment, { MomentInput } from 'moment';

export interface ITimerAnalyticsData {
  start: moment.Moment;
  end: moment.Moment;
  startSave: moment.Moment;
  endSave: moment.Moment;
}

export function ApiTimerAnalytics({ data }: { data?: ITimerAnalyticsData }) {
  //TODO: remove inline styles
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
      }}>
      <p>start: {data?.start?.toLocaleString()}</p>
      <p>end: {data?.end?.toLocaleString()}</p>
      <p>startSave: {data?.startSave?.toLocaleString()}</p>
      <p>endSave: {data?.endSave?.toLocaleString()}</p>
    </div>
  );
}

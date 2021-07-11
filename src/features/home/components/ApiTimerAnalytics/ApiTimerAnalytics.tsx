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
        border: 'solid',
        padding: 30,
      }}>
      <p>start: {data?.start?.format('hh:mm:ss')}</p>
      <p>end: {data?.end?.format('hh:mm:ss')}</p>
      <p>startSave: {data?.startSave?.format('hh:mm:ss')}</p>
      <p>endSave: {data?.endSave?.format('hh:mm:ss')}</p>
    </div>
  );
}

import moment from 'moment';
import { useEffect, useState } from 'react';

export function Timer() {
  const [time, setTime] = useState(moment());

  useEffect(() => {
    setTimeout(() => setTime(moment()), 1000);
  }, [time]);

  return (
    <div>
      <p>{time.format('hh:mm:ss')}</p>
    </div>
  );
}

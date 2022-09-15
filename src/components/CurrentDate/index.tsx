import { useState } from 'react';
import { DateTime } from 'luxon';

import useInterval from 'hooks/useInterval';

import { capitalize } from 'util/functions';
import config from 'config';
import './styles.scss';

const CurrentDate = () => {
  const [currentDate, setCurrentDate] = useState('');
  const [currentHour, setCurrentHour] = useState('');

  useInterval(() => {
    const DTNow = DateTime.local(config.luxon);

    setCurrentDate(
      `${capitalize(DTNow.weekdayLong)},
      ${DTNow.toLocaleString(DateTime.DATE_FULL)}`
    );

    setCurrentHour(`${DTNow.toLocaleString(DateTime.TIME_24_WITH_SECONDS)}`);
  }, 200);

  return (
    <div id="clock-container">
      <p id="current-date">{currentDate}</p>
      <p id="current-hour">{currentHour}</p>
    </div>
  );
};

export default CurrentDate;

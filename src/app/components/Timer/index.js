import React, { useContext } from 'react';
import game from '../../../game';
import { connect } from 'react-redux';
import { useInterval } from '../../hooks';
import TimerContext from '../TimerContext';
import { timeConverter, countTimePassed } from '../../../utils';
import './index.scss';

function Timer() {
  const { startTime, currentTime, setCurrentTime } = useContext(TimerContext);

  useInterval(
    () => {
      setCurrentTime(30 - countTimePassed(Date.now(), startTime));
    },
    currentTime === 0 ? null : 1000,
  );

  const { min, sec } = timeConverter(currentTime);

  return (
    <div className="Timer">
      <time className="Timer--time">
        Time: {min}
        <span>m</span> : {sec}
        <span>s</span>
      </time>
    </div>
  );
}

export default Timer;

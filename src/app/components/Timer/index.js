import React, { useContext } from 'react';
import { compose, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import game from '../../../game';
import { useInterval } from '../../hooks';
import TimerContext from '../TimerContext';
import { timeConverter, countTimePassed } from '../../../utils';
import './index.scss';

function Timer({ timeIsOut, gameOver, toggleModal, time }) {
  const { startTime, setStartTime, currentTime, setCurrentTime } = useContext(TimerContext);

  useInterval(
    () => {
      setCurrentTime(time - countTimePassed(Date.now(), startTime));
    },
    toggleModal || currentTime === 0 ? null : 1000,
  );

  if (currentTime === 0 && !gameOver) {
    timeIsOut();

    setStartTime(Date.now());
    setCurrentTime(time);
  }

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

const enhance = compose(
  connect(
    state => ({
      gameOver: game.selectors.getIsGameOver(state),
      toggleModal: game.selectors.getToggleModal(state),
      time: game.selectors.getTime(state),
    }),
    dispatch =>
      bindActionCreators(
        {
          timeIsOut: game.actions.timeIsOut,
        },
        dispatch,
      ),
  ),
);

export default enhance(Timer);

import React from 'react';
import game from '../../../../../game';
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';
import { Button } from '../../../../components';
import gameOver from '../../../../static/gifs/gameOver.gif';
import './index.scss';

function GameOver({ questionsAnswered, playAgain }) {
  const onClick = () => {
    playAgain();
  };

  return (
    <div className="GameOver">
      <img src={gameOver} alt={'Man closing a door'} />
      <p>You answered: {questionsAnswered} questions...</p>
      <Button onClick={onClick}>Try again...</Button>
    </div>
  );
}

const enhance = compose(
  connect(
    null,
    dispatch =>
      bindActionCreators(
        {
          playAgain: game.actions.playAgain,
        },
        dispatch,
      ),
  ),
);

export default enhance(GameOver);

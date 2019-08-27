import React from 'react';
import './index.scss';

function GameOver({ questionsAnswered }) {
  return (
    <div>
      <p>Game Over!</p>
      <p>You answered: {questionsAnswered} questions!</p>
    </div>
  );
}

export default GameOver;

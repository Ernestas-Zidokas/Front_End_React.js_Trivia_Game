import React from 'react';
import letsPlay from '../../../static/gifs/letsPlay.gif';
import { Button } from '../../../components';

function Play({ setToggleInGame }) {
  const handlePlay = () => {
    setToggleInGame();
  };

  return (
    <div className="ReactModal__Content--Play">
      <p>Do You Want To Play A Game?</p>
      <Button onClick={handlePlay}>Play</Button>
      <img src={letsPlay} alt="A doll with a mask in a TV" />
    </div>
  );
}

export default Play;

import React from 'react';
import youMustChoose from '../../../static/gifs/youMustChoose.gif';

function ModalTitle() {
  return (
    <div className="ReactModal__Content--Categories__title">
      <label>You Must Choose... </label>
      <img src={youMustChoose} alt={'A doll in a mask'} />
    </div>
  );
}

export default ModalTitle;

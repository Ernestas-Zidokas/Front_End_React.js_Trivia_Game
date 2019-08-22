import React from 'react';
import game from '../../../game';
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';
import { Modal } from './components';
import './index.scss';

function Trivia({ questions }) {
  return (
    <div className="Trivia">
      <Modal />
      {questions.length > 0 && (
        <div className="Questions">
          {questions.map(({ question }, i) => (
            <p key={i}>{question}</p>
          ))}
        </div>
      )}
    </div>
  );
}

const enhance = compose(
  connect(
    state => ({
      questions: game.selectors.getQuestions(state),
    }),
    dispatch => bindActionCreators({}, dispatch),
  ),
);

export default enhance(Trivia);

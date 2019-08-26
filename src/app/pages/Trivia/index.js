import React from 'react';
import game from '../../../game';
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';
import { Modal } from './components';
import { shuffleArray } from '../../../utils';
import { Button } from '../../components';
import './index.scss';

function Trivia({ question }) {
  const onClick = e => {
    console.log(e.target.value);
  };
  return (
    <div className="Trivia">
      <Modal />
      {question.length > 0 && (
        <div className="Questions">
          {question.map(({ question, correct_answer, incorrect_answers }, i) => {
            const answersArray = shuffleArray([...incorrect_answers, correct_answer]);
            return (
              <div key={i}>
                <p>{question}</p>
                <div>
                  {answersArray.map((answer, i) => (
                    <Button onClick={onClick} key={i} value={answer}>
                      {answer}
                    </Button>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

const enhance = compose(
  connect(
    state => ({
      question: game.selectors.getQuestion(state),
    }),
    dispatch => bindActionCreators({}, dispatch),
  ),
);

export default enhance(Trivia);

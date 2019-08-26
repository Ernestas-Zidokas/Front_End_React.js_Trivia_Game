import React from 'react';
import game from '../../../game';
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';
import { Modal } from './components';
import { shuffleArray } from '../../../utils';
import { Button, Timer } from '../../components';
import Entities from 'html-entities';
import styled from 'styled-components';
import './index.scss';

const StyleButton = styled(Button)`
  background: ${({ wrongAnswers, value }) => {
    if (wrongAnswers.includes(value)) {
      return 'red';
    }
  }};
`;

function Trivia({ question, submitAnswer, gameOver, questionNr, wrongAnswers }) {
  let HtmlEntities = Entities.AllHtmlEntities;
  const entities = new HtmlEntities();

  const onClick = e => {
    submitAnswer(e.target.value);
  };

  return (
    <div className="Trivia">
      <Modal />
      {gameOver && <p>Game Over!</p>}
      {!gameOver && (
        <React.Fragment>
          {question.length > 0 && (
            <div className="Trivia--container">
              <Timer></Timer>
              <p className="Trivia--number">Question Nr. {questionNr}</p>
              {question.map(({ question, correct_answer, incorrect_answers }, i) => {
                const answersArray = shuffleArray([...incorrect_answers, correct_answer], true);

                return (
                  <div key={i}>
                    <p className="Trivia--question">{entities.decode(question)}</p>
                    <div>
                      {answersArray.map((answer, i) => (
                        <StyleButton
                          wrongAnswers={wrongAnswers}
                          className="Trivia--answer"
                          onClick={onClick}
                          key={i}
                          value={answer}
                        >
                          {answer}
                        </StyleButton>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </React.Fragment>
      )}
    </div>
  );
}

const enhance = compose(
  connect(
    state => ({
      question: game.selectors.getQuestion(state),
      gameOver: game.selectors.getIsGameOver(state),
      questionNr: game.selectors.getQuestionNr(state),
      wrongAnswers: game.selectors.getWrongAnswers(state),
    }),
    dispatch =>
      bindActionCreators(
        {
          submitAnswer: game.actions.submitAnswer,
        },
        dispatch,
      ),
  ),
);

export default enhance(Trivia);

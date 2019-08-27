import React from 'react';
import game from '../../../game';
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';
import { Modal, GameOver } from './components';
import { shuffleArray } from '../../../utils';
import { Button, Timer, Loader } from '../../components';
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

function Trivia({
  question,
  submitAnswer,
  gameOver,
  questionNr,
  wrongAnswers,
  life,
  questionsAnswered,
  loading,
  toggleModal,
}) {
  let HtmlEntities = Entities.AllHtmlEntities;
  const entities = new HtmlEntities();

  const onClick = e => {
    submitAnswer(e.target.value);
  };

  return (
    <div className="Trivia">
      <p className="Trivia--life">Life: {life}</p>
      {loading && <Loader></Loader>}
      <Modal />
      {gameOver && <GameOver questionsAnswered={questionsAnswered}></GameOver>}
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
                          {entities.decode(answer)}
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
      life: game.selectors.getLifeCount(state),
      questionsAnswered: game.selectors.getQuestionsAnswered(state),
      loading: game.selectors.getQuestionLoading(state),
      toggleModal: game.selectors.getToggleModal(state),
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

import React from 'react';
import game from '../../../game';
import { connect } from 'react-redux';
import { Modal, GameOver, Life, Question } from './components';
import { Timer, Loader } from '../../components';
import makeYourChoice from '../../static/gifs/makeYourChoice.gif';
import './index.scss';

function Trivia({ question, gameOver, questionNr, life, questionsAnswered, loading, toggleModal }) {
  const showQuestion = !gameOver && question.length > 0 && !toggleModal;

  return (
    <div className="Trivia">
      <Life life={life} />
      {loading && <Loader />}
      <Modal />
      {gameOver && <GameOver questionsAnswered={questionsAnswered} />}
      {showQuestion && (
        <div className="Trivia--Container">
          <img src={makeYourChoice} alt="A doll with a mask in a TV" />
          <p className="Trivia--Container--number">Question Nr. {questionNr}</p>
          <Timer />
          <Question />
        </div>
      )}
    </div>
  );
}

const enhance = connect(state => ({
  question: game.selectors.getQuestion(state),
  gameOver: game.selectors.getIsGameOver(state),
  questionNr: game.selectors.getQuestionNr(state),
  life: game.selectors.getLifeCount(state),
  questionsAnswered: game.selectors.getQuestionsAnswered(state),
  loading: game.selectors.getQuestionLoading(state),
  toggleModal: game.selectors.getToggleModal(state),
}));

export default enhance(Trivia);

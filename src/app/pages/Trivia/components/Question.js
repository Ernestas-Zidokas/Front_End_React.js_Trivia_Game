import React from 'react';
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';
import { AllHtmlEntities } from 'html-entities';
import styled from 'styled-components';
import { shuffleArray } from '../../../../utils';
import { Button } from '../../../components';
import game from '../../../../game';

const StyleButton = styled(Button)`
  ${({ wrongAnswers, value }) => {
    if (wrongAnswers.includes(value)) {
      return 'background: red; border: none;';
    }
  }};
`;

function Question({ question, wrongAnswers, submitAnswer }) {
  const entities = new AllHtmlEntities();

  const onClick = e => {
    submitAnswer(e.target.value);
  };

  return (
    <React.Fragment>
      {question.map(({ question, correct_answer, incorrect_answers }, i) => {
        const answersArray = shuffleArray([...incorrect_answers, correct_answer], true);

        return (
          <div key={i}>
            <p className="Trivia--Container--question">{entities.decode(question)}</p>
            <div>
              {answersArray.map((answer, i) => (
                <StyleButton
                  wrongAnswers={wrongAnswers}
                  className="Trivia--Container--answer"
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
    </React.Fragment>
  );
}

const enhance = compose(
  connect(
    state => ({
      question: game.selectors.getQuestion(state),
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

export default enhance(Question);

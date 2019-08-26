import game from '../../../game';

export default ({ getState, dispatch }) => next => action => {
  next(action);

  if (action.type === game.actionTypes.SUBMIT_ANSWER) {
    const correctAnswer = game.selectors.getCorrectAnswer(getState());

    if (action.payload === correctAnswer) {
      dispatch(game.actions.answerIsCorrect());
      dispatch(game.actions.toggleModal());
    } else {
      dispatch(game.actions.answerIsInCorrect(action.payload));
    }
  }
};

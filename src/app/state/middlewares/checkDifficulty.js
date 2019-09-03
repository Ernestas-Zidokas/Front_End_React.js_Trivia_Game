import game from '../../../game';

export default ({ getState, dispatch }) => next => action => {
  next(action);

  if (action.type === game.actionTypes.ANSWER_IS_CORRECT) {
    const questionNr = game.selectors.getQuestionNr(getState());

    if (questionNr === 5) {
      dispatch(game.actions.setDifficulty('medium'));
      dispatch(game.actions.setTime(20));
    }

    if (questionNr === 10) {
      dispatch(game.actions.setDifficulty('hard'));
      dispatch(game.actions.setTime(15));
    }
  }
};

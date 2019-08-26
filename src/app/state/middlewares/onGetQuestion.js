import game from '../../../game';

export default ({ dispatch }) => next => action => {
  next(action);

  if (action.type === game.actionTypes.GET_QUESTION_SUCCESS) {
    dispatch(game.actions.setQuestionNr());
  }
};

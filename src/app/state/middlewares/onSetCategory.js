import game from '../../../game';

export default ({ getState, dispatch }) => next => action => {
  next(action);

  if (action.type === game.actionTypes.SET_CATEGORY) {
    dispatch(game.actions.getQuestion(game.selectors.getSelectedCategory(getState())));
  }
};

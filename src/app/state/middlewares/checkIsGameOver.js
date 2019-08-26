import game from '../../../game';

export default ({ getState, dispatch }) => next => action => {
  next(action);

  if (action.type === game.actionTypes.ANSWER_IS_INCORRECT) {
    const life = game.selectors.getLifeCount(getState());
    if (life === 0) {
      dispatch(game.actions.setGameOver());
    }
  }
};

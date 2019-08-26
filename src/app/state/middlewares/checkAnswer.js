import game from '../../../game';

export default ({ getState, dispatch }) => next => action => {
  next(action);

  if (action.type === game.actionTypes.SUBMIT_ANSWER) {
    const correntAnswer = game.selectors.getCorrectAnswer(getState());
    if (action.payload === correntAnswer) {
      dispatch();
    }
  }
};

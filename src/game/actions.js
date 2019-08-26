import * as actionTypes from './actionTypes';
import { MODULE_NAME } from './constants';
import { API } from '../constants';
import * as selectors from './selectors';
import querySring from 'query-string';

export const getQuestion = category => async (dispatch, getState) => {
  const difficulty = selectors.getDifficulty(getState());
  const queryData = { amount: 1, category, difficulty };

  dispatch({ type: actionTypes.GET_QUESTION });
  try {
    const result = await fetch(`${API.getQuestion}?${querySring.stringify(queryData)}`);
    const json = await result.json();

    if (!json.response_code) {
      dispatch({
        type: actionTypes.GET_QUESTION_SUCCESS,
        payload: json.results,
      });
    }
  } catch (error) {
    dispatch({
      type: actionTypes.GET_QUESTION_FAILURE,
      payload: 'Something went wrong!',
    });
  }
};

export const getCategories = () => async dispatch => {
  dispatch({ type: actionTypes.GET_CATEGORIES });

  try {
    const result = await fetch(API.getCategories);
    const json = await result.json();
    dispatch({
      type: actionTypes.GET_CATEGORIES_SUCCESS,
      payload: json.trivia_categories,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_CATEGORIES_FAILURE,
      payload: 'Something went wrong!',
    });
  }
};

export const setCategory = payload => ({
  type: actionTypes.SET_CATEGORY,
  payload,
});

export const toggleModal = () => ({
  type: actionTypes.TOGGLE_MODAL,
});

export const submitAnswer = payload => ({
  type: actionTypes.SUBMIT_ANSWER,
  payload,
});

export const setQuestionNr = () => ({
  type: actionTypes.SET_QUESTION_NR,
});

export const answerIsCorrect = () => ({
  type: actionTypes.ANSWER_IS_CORRECT,
});

export const answerIsInCorrect = payload => ({
  type: actionTypes.ANSWER_IS_INCORRECT,
  payload,
});

export const setGameOver = () => ({
  type: actionTypes.GAME_OVER,
});

export const setDifficulty = payload => ({
  type: actionTypes.SET_DIFFICULTY,
  payload,
});

import * as actionTypes from './actionTypes';
import { MODULE_NAME } from './constants';
import { API } from '../constants';
import * as selectors from './selectors';

export const getQuestions = () => async dispatch => {
  dispatch({ type: actionTypes.GET_QUESTIONS });

  try {
    const result = await fetch('https://opentdb.com/api.php?amount=10');
    const json = await result.json();

    if (!json.response_code) {
      dispatch({
        type: actionTypes.GET_QUESTIONS_SUCCESS,
        payload: json.results,
      });
    }
  } catch (error) {
    dispatch({
      type: actionTypes.GET_QUESTIONS_FAILURE,
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

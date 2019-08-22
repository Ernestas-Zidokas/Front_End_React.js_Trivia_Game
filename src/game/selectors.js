import { MODULE_NAME } from './constants';

export const getQuestions = state => {
  return state[MODULE_NAME].questions.data;
};

export const getCategories = state => {
  return state[MODULE_NAME].categories.data;
};

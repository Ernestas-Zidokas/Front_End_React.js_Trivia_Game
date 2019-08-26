import { MODULE_NAME } from './constants';
import { randomNumber } from '../utils';

export const getQuestion = state => {
  return state[MODULE_NAME].question.data;
};

export const getCategories = state => {
  return state[MODULE_NAME].categories.data;
};

export const getCorrectAnswer = state => {
  return state[MODULE_NAME].question.data.correct_answer;
};

export const getSelectedCategory = state => {
  return state[MODULE_NAME].categories.selectedCategory;
};

export const getToggleModal = state => {
  return state[MODULE_NAME].categories.toggleModal;
};

export const get4RandCategories = state => {
  const categories = state[MODULE_NAME].categories.data;

  const rand4Categories = [...Array(4)].reduce(
    result => [...result, randCategory(result, categories)],
    [],
  );

  return rand4Categories;
};

function randCategory(result, categories) {
  let randCat = categories[randomNumber(24)];

  const catExists = result.find(cat => (cat ? cat.id === randCat.id : false));

  if (catExists) {
    return randCategory(result, categories);
  } else {
    return randCat;
  }
}

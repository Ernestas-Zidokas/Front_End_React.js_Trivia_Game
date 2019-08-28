import { MODULE_NAME } from './constants';
import { randomNumber } from '../utils';

export const getQuestion = state => {
  return state[MODULE_NAME].question.data;
};

export const getQuestionLoading = state => {
  return state[MODULE_NAME].question.loading;
};

export const getCategories = state => {
  return state[MODULE_NAME].categories.data;
};

export const getCategoryLoading = state => {
  return state[MODULE_NAME].categories.loading;
};

export const getCorrectAnswer = state => {
  return state[MODULE_NAME].question.data[0].correct_answer;
};

export const getSelectedCategory = state => {
  return state[MODULE_NAME].categories.selectedCategory;
};

export const getToggleModal = state => {
  return state[MODULE_NAME].categories.toggleModal;
};

export const getLifeCount = state => {
  return state[MODULE_NAME].play.life;
};

export const getIsGameOver = state => {
  return state[MODULE_NAME].play.gameOver;
};

export const getToggleInGame = state => {
  return state[MODULE_NAME].play.toggleInGame;
};

export const getQuestionNr = state => {
  return state[MODULE_NAME].play.questionNr;
};

export const getDifficulty = state => {
  return state[MODULE_NAME].play.difficulty;
};

export const getWrongAnswers = state => {
  return state[MODULE_NAME].play.wrongAnswers;
};

export const getQuestionsAnswered = state => {
  return state[MODULE_NAME].play.questionsAnswered;
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

  return catExists ? randCategory(result, categories) : randCat;
}

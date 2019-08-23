import * as actionTypes from './actionTypes';

const INITIAL_QUESTIONS_STATE = {
  data: [],
  error: null,
  loading: false,
};

const INITIAL_PLAY_STATE = {
  life: 3,
  correctAnswers: 0,
  questionsAnswered: 0,
};

const INITIAL_CATEGORY_STATE = {
  data: [],
  error: null,
  loading: false,
  selectedCategory: -1,
};

const INITIAL_STATE = {
  questions: INITIAL_QUESTIONS_STATE,
  categories: INITIAL_CATEGORY_STATE,
  player: INITIAL_PLAY_STATE,
};

function reducer(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case actionTypes.GET_QUESTION:
      return { ...state, questions: { ...INITIAL_QUESTIONS_STATE, loading: true } };

    case actionTypes.GET_QUESTION_SUCCESS:
      return { ...state, questions: { ...INITIAL_QUESTIONS_STATE, data: payload } };

    case actionTypes.GET_QUESTION_FAILURE:
      return { ...state, questions: { ...INITIAL_QUESTIONS_STATE, error: payload } };

    case actionTypes.GET_CATEGORIES:
      return { ...state, categories: { ...INITIAL_CATEGORY_STATE, loading: true } };

    case actionTypes.GET_CATEGORIES_SUCCESS:
      return { ...state, categories: { ...INITIAL_CATEGORY_STATE, data: payload } };

    case actionTypes.GET_CATEGORIES_FAILURE:
      return { ...state, categories: { ...INITIAL_CATEGORY_STATE, error: payload } };

    case actionTypes.SET_CATEGORY:
      return {
        ...state,
        categories: {
          ...state.categories,
          selectedCategory: payload,
        },
      };
    default:
      return state;
  }
}

export default reducer;

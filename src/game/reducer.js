import * as actionTypes from './actionTypes';

const INITIAL_QUESTION_STATE = {
  data: [],
  error: null,
  loading: false,
};

const INITIAL_PLAY_STATE = {
  life: 3,
  questionsAnswered: 0,
  questionNr: 0, //to determine difficulty level
};

const INITIAL_CATEGORY_STATE = {
  data: [],
  error: null,
  loading: false,
  selectedCategory: -1,
  toggleModal: true,
};

const INITIAL_STATE = {
  question: INITIAL_QUESTION_STATE,
  categories: INITIAL_CATEGORY_STATE,
  player: INITIAL_PLAY_STATE,
};

function reducer(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case actionTypes.GET_CATEGORIES:
      return { ...state, categories: { ...INITIAL_CATEGORY_STATE, loading: true } };

    case actionTypes.GET_CATEGORIES_SUCCESS:
      return { ...state, categories: { ...INITIAL_CATEGORY_STATE, data: payload } };

    case actionTypes.GET_CATEGORIES_FAILURE:
      return { ...state, categories: { ...INITIAL_CATEGORY_STATE, error: payload } };

    case actionTypes.GET_QUESTION:
      return { ...state, question: { ...INITIAL_QUESTION_STATE, loading: true } };

    case actionTypes.GET_QUESTION_SUCCESS:
      return { ...state, question: { ...INITIAL_QUESTION_STATE, data: payload } };

    case actionTypes.GET_QUESTION_FAILURE:
      return { ...state, question: { ...INITIAL_QUESTION_STATE, error: payload } };

    case actionTypes.SET_CATEGORY:
      return {
        ...state,
        categories: {
          ...state.categories,
          selectedCategory: payload,
        },
      };

    case actionTypes.TOGGLE_MODAL:
      return {
        ...state,
        categories: {
          ...state.categories,
          toggleModal: !state.categories.toggleModal,
        },
      };

    case actionTypes.SET_QUESTION_NR:
      return {
        ...state,
        player: {
          ...state.player,
          questionNr: state.player.questionNr + 1,
        },
      };
    default:
      return state;
  }
}

export default reducer;

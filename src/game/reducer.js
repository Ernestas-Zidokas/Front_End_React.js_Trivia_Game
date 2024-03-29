import * as actionTypes from './actionTypes';

const INITIAL_QUESTION_STATE = {
  data: [],
  error: null,
  loading: false,
};

const INITIAL_PLAY_STATE = {
  life: 3,
  questionsAnswered: 0,
  questionNr: 0,
  gameOver: false,
  difficulty: 'easy',
  wrongAnswers: [],
  toggleInGame: false,
  time: 30,
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
  play: INITIAL_PLAY_STATE,
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
        play: {
          ...state.play,
          questionNr: state.play.questionNr + 1,
        },
      };

    case actionTypes.ANSWER_IS_CORRECT:
      return {
        ...state,
        play: {
          ...state.play,
          questionsAnswered: state.play.questionsAnswered + 1,
        },
      };

    case actionTypes.ANSWER_IS_INCORRECT:
      return {
        ...state,
        play: {
          ...state.play,
          life: state.play.life - 1,
          wrongAnswers: [...state.play.wrongAnswers, payload],
        },
      };

    case actionTypes.TIME_IS_OUT:
      return {
        ...state,
        play: {
          ...state.play,
          life: state.play.life - 1,
        },
      };

    case actionTypes.GAME_OVER:
      return {
        ...state,
        play: {
          ...state.play,
          gameOver: true,
        },
      };

    case actionTypes.SET_DIFFICULTY:
      return {
        ...state,
        play: {
          ...state.play,
          difficulty: payload,
        },
      };

    case actionTypes.TOGGLE_IN_GAME:
      return {
        ...state,
        play: {
          ...state.play,
          toggleInGame: !state.play.toggleInGame,
        },
      };

    case actionTypes.PLAY_AGAIN:
      return {
        ...state,
        play: {
          ...INITIAL_PLAY_STATE,
        },
        categories: {
          ...state.categories,
          toggleModal: true,
        },
      };

    case actionTypes.SET_TIME:
      return {
        ...state,
        play: {
          ...state.play,
          time: payload,
        },
      };

    default:
      return state;
  }
}

export default reducer;

import database from '../firebase';

const actionTypes = {
  FETCH_QUESTIONS_PENDING: 'questions/FETCH_QUESTIONS_PENDING',
  FETCH_QUESTIONS_SUCCESS: 'questions/FETCH_QUESTIONS_SUCCESS',
  FETCH_QUESTIONS_ERROR: 'questions/FETCH_QUESTIONS_ERROR',
};

const initialState = {
  '1': {
    title: 'What is the difference between HTML5 and HTML?', id: '1'
  },
};

function questions(state = initialState, { type, payload }) {
  switch (type) {
    case actionTypes.FETCH_QUESTIONS_SUCCESS: {
      const { questionsList } = payload;
      return { ...state, ...questionsList };
    }

    default:
      return state;
  }
}


export function fetchQuestions() {
  return dispatch => {
    dispatch({
      type: actionTypes.FETCH_QUESTIONS_PENDING,
    });

    return database.ref('/questions').once('value', snap => {
      console.log(snap.val());
      const questionsList = snap.val();
      dispatch({
        type: actionTypes.FETCH_QUESTIONS_SUCCESS,
        payload: {
          questionsList: questionsList,
        },
      })
    })
      .catch((error) => {
        console.log(error);
        dispatch({
          type: actionTypes.FETCH_QUESTIONS_ERROR,
        });
      });
  }
}


export default questions;
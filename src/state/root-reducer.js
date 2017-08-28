import { combineReducers } from 'redux';

const initialState = [
  { title: 'What is the difference between HTML5 and HTML?', id: '1' },
];

function questions(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TODO': {
      return state;
    }

    default:
      return state;
  }
}

export default combineReducers({
  questions,
});
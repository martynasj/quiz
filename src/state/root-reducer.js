const initialState = [
  { title: 'Buy milk', id: '1' },
];

export default function(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TODO': {
      return state;
    }

    default:
      return state;
  }
}
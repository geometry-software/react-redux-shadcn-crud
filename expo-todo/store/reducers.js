import { SET_TODOS } from './actions';

const initialState = {
  todos: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_TODOS:
      return { ...state, todos: action.payload };
    default:
      return state;
  }
}

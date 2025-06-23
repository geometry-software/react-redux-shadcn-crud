import {
  SET_POSTS,
  ADD_POST,
  UPDATE_POST,
  DELETE_POST,
  SET_LOADING,
  SET_ERROR,
} from '../actions/postsActions.js';

const initialState = {
  items: [],
  loading: false,
  error: null,
};

export default function postsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, loading: action.payload };
    case SET_ERROR:
      return { ...state, error: action.payload };
    case SET_POSTS:
      return { ...state, items: action.payload };
    case ADD_POST:
      return { ...state, items: [action.payload, ...state.items] };
    case UPDATE_POST:
      return {
        ...state,
        items: state.items.map((post) =>
          post.id === action.payload.id ? action.payload : post
        ),
      };
    case DELETE_POST:
      return {
        ...state,
        items: state.items.filter((post) => post.id !== action.payload),
      };
    default:
      return state;
  }
}

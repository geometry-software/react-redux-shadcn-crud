import {
  SET_POSTS,
  ADD_POST,
  UPDATE_POST,
  DELETE_POST,
  SET_LOADING,
  SET_ERROR,
} from '../actions/postsActions';
import type { Post } from '../../types';

interface PostsState {
  items: Post[];
  loading: boolean;
  error: string | null;
}

const initialState: PostsState = {
  items: [],
  loading: false,
  error: null,
};

export default function postsReducer(
  state: PostsState = initialState,
  action: any
): PostsState {
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

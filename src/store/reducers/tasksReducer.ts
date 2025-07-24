import {
  SET_TASKS,
  ADD_TASK,
  UPDATE_TASK,
  DELETE_TASK,
  SET_TASK_LOADING,
  SET_TASK_ERROR,
} from '../actions/tasksActions';
import type { Task } from '../../types';

interface TasksState {
  items: Task[];
  loading: boolean;
  error: string | null;
}

const initialState: TasksState = {
  items: [],
  loading: false,
  error: null,
};

export default function tasksReducer(
  state: TasksState = initialState,
  action: any
): TasksState {
  switch (action.type) {
    case SET_TASK_LOADING:
      return { ...state, loading: action.payload };
    case SET_TASK_ERROR:
      return { ...state, error: action.payload };
    case SET_TASKS:
      return { ...state, items: action.payload };
    case ADD_TASK:
      return { ...state, items: [action.payload, ...state.items] };
    case UPDATE_TASK:
      return {
        ...state,
        items: state.items.map((t) => (t.id === action.payload.id ? action.payload : t)),
      };
    case DELETE_TASK:
      return { ...state, items: state.items.filter((t) => t.id !== action.payload) };
    default:
      return state;
  }
}

import { createStore, applyMiddleware, combineReducers } from 'redux';
import { thunk } from 'redux-thunk';
import postsReducer from './reducers/postsReducer';
import tasksReducer from './reducers/tasksReducer';

const rootReducer = combineReducers({
  posts: postsReducer,
  tasks: tasksReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

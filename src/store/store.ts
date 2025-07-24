import { createStore, applyMiddleware, combineReducers } from 'redux';
import { thunk } from 'redux-thunk';
import postsReducer from './reducers/postsReducer';
import productsReducer from './reducers/productsReducer';
import logDataAction from './logDataMiddleware';

const rootReducer = combineReducers({
  posts: postsReducer,
  products: productsReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk, logDataAction()));

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

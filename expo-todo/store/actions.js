import { collection, addDoc, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../firebase';

export const SET_TODOS = 'SET_TODOS';

export const fetchTodos = () => async dispatch => {
  const snapshot = await getDocs(collection(db, 'todos'));
  const todos = snapshot.docs.map(d => ({ id: d.id, ...d.data() }));
  dispatch({ type: SET_TODOS, payload: todos });
};

export const addTodo = text => async dispatch => {
  const docRef = await addDoc(collection(db, 'todos'), { text });
  dispatch(fetchTodos());
  return docRef.id;
};

export const removeTodo = id => async dispatch => {
  await deleteDoc(doc(db, 'todos', id));
  dispatch(fetchTodos());
};

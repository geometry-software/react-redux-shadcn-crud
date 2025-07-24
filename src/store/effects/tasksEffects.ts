import type { Dispatch } from 'redux';
import { collection, getDocs, addDoc, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import {
  setTasks,
  addTask,
  updateTask as updateTaskAction,
  deleteTask as deleteTaskAction,
  setTaskLoading,
  setTaskError,
} from '../actions/tasksActions';
import type { Task } from '../../types';

const COLLECTION = 'tasks';

export const fetchTasks = () => async (dispatch: Dispatch) => {
  dispatch(setTaskLoading(true));
  try {
    const snapshot = await getDocs(collection(db, COLLECTION));
    const tasks: Task[] = snapshot.docs.map((d) => ({ id: d.id, ...(d.data() as Omit<Task, 'id'>) }));
    dispatch(setTasks(tasks));
  } catch (err) {
    dispatch(setTaskError(String(err)));
  } finally {
    dispatch(setTaskLoading(false));
  }
};

export const createTask = (task: Omit<Task, 'id'>) => async (dispatch: Dispatch) => {
  dispatch(setTaskLoading(true));
  try {
    const docRef = await addDoc(collection(db, COLLECTION), task);
    dispatch(addTask({ ...task, id: docRef.id }));
  } catch (err) {
    dispatch(setTaskError(String(err)));
  } finally {
    dispatch(setTaskLoading(false));
  }
};

export const editTask = (task: Task) => async (dispatch: Dispatch) => {
  dispatch(setTaskLoading(true));
  try {
    await updateDoc(doc(db, COLLECTION, task.id), task);
    dispatch(updateTaskAction(task));
  } catch (err) {
    dispatch(setTaskError(String(err)));
  } finally {
    dispatch(setTaskLoading(false));
  }
};

export const removeTask = (id: string) => async (dispatch: Dispatch) => {
  dispatch(setTaskLoading(true));
  try {
    await deleteDoc(doc(db, COLLECTION, id));
    dispatch(deleteTaskAction(id));
  } catch (err) {
    dispatch(setTaskError(String(err)));
  } finally {
    dispatch(setTaskLoading(false));
  }
};

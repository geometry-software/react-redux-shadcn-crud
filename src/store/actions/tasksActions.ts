import type { Task } from '../../types';

export const SET_TASKS = 'SET_TASKS' as const;
export const ADD_TASK = 'ADD_TASK' as const;
export const UPDATE_TASK = 'UPDATE_TASK' as const;
export const DELETE_TASK = 'DELETE_TASK' as const;
export const SET_TASK_LOADING = 'SET_TASK_LOADING' as const;
export const SET_TASK_ERROR = 'SET_TASK_ERROR' as const;

export const setTasks = (tasks: Task[]) => ({ type: SET_TASKS, payload: tasks });
export const addTask = (task: Task) => ({ type: ADD_TASK, payload: task });
export const updateTask = (task: Task) => ({ type: UPDATE_TASK, payload: task });
export const deleteTask = (id: string) => ({ type: DELETE_TASK, payload: id });
export const setTaskLoading = (loading: boolean) => ({ type: SET_TASK_LOADING, payload: loading });
export const setTaskError = (error: string) => ({ type: SET_TASK_ERROR, payload: error });

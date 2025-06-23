import type { Post } from '../../types';

export const SET_POSTS = 'SET_POSTS' as const;
export const ADD_POST = 'ADD_POST' as const;
export const UPDATE_POST = 'UPDATE_POST' as const;
export const DELETE_POST = 'DELETE_POST' as const;
export const SET_LOADING = 'SET_LOADING' as const;
export const SET_ERROR = 'SET_ERROR' as const;

export const setPosts = (posts: Post[]) => ({ type: SET_POSTS, payload: posts });
export const addPost = (post: Post) => ({ type: ADD_POST, payload: post });
export const updatePost = (post: Post) => ({ type: UPDATE_POST, payload: post });
export const deletePost = (id: number) => ({ type: DELETE_POST, payload: id });
export const setLoading = (loading: boolean) => ({ type: SET_LOADING, payload: loading });
export const setError = (error: string) => ({ type: SET_ERROR, payload: error });

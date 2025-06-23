export const SET_POSTS = 'SET_POSTS';
export const ADD_POST = 'ADD_POST';
export const UPDATE_POST = 'UPDATE_POST';
export const DELETE_POST = 'DELETE_POST';
export const SET_LOADING = 'SET_LOADING';
export const SET_ERROR = 'SET_ERROR';

export const setPosts = (posts) => ({ type: SET_POSTS, payload: posts });
export const addPost = (post) => ({ type: ADD_POST, payload: post });
export const updatePost = (post) => ({ type: UPDATE_POST, payload: post });
export const deletePost = (id) => ({ type: DELETE_POST, payload: id });
export const setLoading = (loading) => ({ type: SET_LOADING, payload: loading });
export const setError = (error) => ({ type: SET_ERROR, payload: error });

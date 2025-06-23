import type { Dispatch } from 'redux';
import {
  setPosts,
  addPost,
  updatePost,
  deletePost,
  setLoading,
  setError,
} from '../actions/postsActions';
import type { Post } from '../../types';

const API_URL = 'https://jsonplaceholder.typicode.com/posts';

export const fetchPosts = () => async (dispatch: Dispatch) => {
  dispatch(setLoading(true));
  try {
    const res = await fetch(API_URL);
    const data: Post[] = await res.json();
    dispatch(setPosts(data.slice(0, 10)));
  } catch (err) {
    dispatch(setError(String(err)));
  } finally {
    dispatch(setLoading(false));
  }
};

export const createPost = (post: Omit<Post, 'id'>) => async (dispatch: Dispatch) => {
  dispatch(setLoading(true));
  try {
    const res = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(post),
    });
    const data: Post = await res.json();
    dispatch(addPost({ ...post, id: data.id } as Post));
  } catch (err) {
    dispatch(setError(String(err)));
  } finally {
    dispatch(setLoading(false));
  }
};

export const editPost = (post: Post) => async (dispatch: Dispatch) => {
  dispatch(setLoading(true));
  try {
    await fetch(`${API_URL}/${post.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(post),
    });
    dispatch(updatePost(post));
  } catch (err) {
    dispatch(setError(String(err)));
  } finally {
    dispatch(setLoading(false));
  }
};

export const removePost = (id: number) => async (dispatch: Dispatch) => {
  dispatch(setLoading(true));
  try {
    await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
    dispatch(deletePost(id));
  } catch (err) {
    dispatch(setError(String(err)));
  } finally {
    dispatch(setLoading(false));
  }
};

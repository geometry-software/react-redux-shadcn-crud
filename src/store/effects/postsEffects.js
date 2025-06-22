import {
  setPosts,
  addPost,
  updatePost,
  deletePost,
  setLoading,
  setError,
} from '../actions/postsActions.js';

const API_URL = 'https://jsonplaceholder.typicode.com/posts';

export const fetchPosts = () => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const res = await fetch(API_URL);
    const data = await res.json();
    dispatch(setPosts(data.slice(0, 10)));
  } catch (err) {
    dispatch(setError(err.toString()));
  } finally {
    dispatch(setLoading(false));
  }
};

export const createPost = (post) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const res = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(post),
    });
    const data = await res.json();
    dispatch(addPost({ ...post, id: data.id }));
  } catch (err) {
    dispatch(setError(err.toString()));
  } finally {
    dispatch(setLoading(false));
  }
};

export const editPost = (post) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    await fetch(`${API_URL}/${post.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(post),
    });
    dispatch(updatePost(post));
  } catch (err) {
    dispatch(setError(err.toString()));
  } finally {
    dispatch(setLoading(false));
  }
};

export const removePost = (id) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
    dispatch(deletePost(id));
  } catch (err) {
    dispatch(setError(err.toString()));
  } finally {
    dispatch(setLoading(false));
  }
};

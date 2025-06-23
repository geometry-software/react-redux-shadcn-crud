import { useState, useEffect, FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import { createPost, editPost } from '../store/effects/postsEffects';
import type { Post } from '../types';
import type { AppDispatch } from '../store/store';

interface Props {
  current: Post | null;
}

export default function PostForm({ current }: Props) {
  const dispatch = useDispatch<AppDispatch>();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  useEffect(() => {
    if (current) {
      setTitle(current.title);
      setBody(current.body);
    } else {
      setTitle('');
      setBody('');
    }
  }, [current]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const post = { title, body, id: current?.id } as Post;
    if (current) {
      dispatch(editPost(post));
    } else {
      dispatch(createPost({ title, body }));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2 p-4 bg-white rounded shadow">
      <input
        className="w-full border p-2 rounded"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        className="w-full border p-2 rounded"
        placeholder="Body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        {current ? 'Update' : 'Add'} Post
      </button>
    </form>
  );
}

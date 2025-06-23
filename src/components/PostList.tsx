import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import PostItem from './PostItem';
import PostForm from './PostForm';
import { fetchPosts } from '../store/effects/postsEffects';
import {
  selectPosts,
  selectLoading,
  selectError,
} from '../store/selectors/postsSelectors';
import type { Post } from '../types';
import type { AppDispatch } from '../store/store';

export default function PostList() {
  const dispatch = useDispatch<AppDispatch>();
  const posts = useSelector(selectPosts);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const [selected, setSelected] = useState<Post | null>(null);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div className="space-y-4">
      <PostForm current={selected} />
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-600">{error}</p>}
      {posts.map((post) => (
        <PostItem key={post.id} post={post} onSelect={setSelected} />
      ))}
    </div>
  );
}

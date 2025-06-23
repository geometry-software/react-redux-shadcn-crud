import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import PostItem from './PostItem.jsx';
import PostForm from './PostForm.jsx';
import {
  fetchPosts,
} from '../store/effects/postsEffects.js';
import {
  selectPosts,
  selectLoading,
  selectError,
} from '../store/selectors/postsSelectors.js';

export default function PostList() {
  const dispatch = useDispatch();
  const posts = useSelector(selectPosts);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div className="space-y-4">
      <PostForm current={selected} />
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-600">{error}</p>}
      {posts.map((post, i) => (
        <PostItem key={i} post={post} onSelect={setSelected} />
      ))}
    </div>
  );
}

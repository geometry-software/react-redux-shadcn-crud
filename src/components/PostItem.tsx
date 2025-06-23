import { useDispatch } from 'react-redux';
import { removePost } from '../store/effects/postsEffects';
import type { Post } from '../types';
import type { AppDispatch } from '../store/store';

interface Props {
  post: Post;
  onSelect: (post: Post) => void;
}

export default function PostItem({ post, onSelect }: Props) {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className="p-4 bg-white shadow rounded space-y-2">
      <h2 className="text-lg font-semibold">{post.title}</h2>
      <p>{post.body}</p>
      <div className="flex gap-2">
        <button
          onClick={() => onSelect(post)}
          className="px-2 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
        >
          Edit
        </button>
        <button
          onClick={() => dispatch(removePost(post.id))}
          className="px-2 py-1 bg-red-600 text-white rounded hover:bg-red-700"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

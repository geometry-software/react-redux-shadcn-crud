import { useDispatch } from 'react-redux';
import { removePost } from '../store/effects/postsEffects.js';

export default function PostItem({ post, onSelect }) {
  const dispatch = useDispatch();

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

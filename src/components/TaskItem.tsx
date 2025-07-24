import { useDispatch } from 'react-redux';
import { removeTask } from '../store/effects/tasksEffects';
import type { Task } from '../types';
import type { AppDispatch } from '../store/store';

interface Props {
  task: Task;
  onSelect: (task: Task) => void;
}

export default function TaskItem({ task, onSelect }: Props) {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className="p-4 bg-white shadow rounded flex items-center justify-between">
      <div onClick={() => onSelect(task)} className="cursor-pointer flex-1">
        <span className={task.completed ? 'line-through' : ''}>{task.text}</span>
      </div>
      <button
        onClick={() => dispatch(removeTask(task.id))}
        className="px-2 py-1 bg-red-600 text-white rounded hover:bg-red-700"
      >
        Delete
      </button>
    </div>
  );
}

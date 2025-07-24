import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import TaskItem from './TaskItem';
import TaskForm from './TaskForm';
import { fetchTasks } from '../store/effects/tasksEffects';
import {
  selectTasks,
  selectTaskLoading,
  selectTaskError,
} from '../store/selectors/tasksSelectors';
import { mockProducts } from '../mockProducts';
import type { Task } from '../types';
import type { AppDispatch } from '../store/store';

export default function TaskList() {
  const dispatch = useDispatch<AppDispatch>();
  const tasks = useSelector(selectTasks);
  const loading = useSelector(selectTaskLoading);
  const error = useSelector(selectTaskError);
  const [selected, setSelected] = useState<Task | null>(null);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <div className="space-y-4">
      <TaskForm current={selected} />
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-600">{error}</p>}
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} onSelect={setSelected} />
      ))}
      <div className="mt-4">
        <h2 className="font-semibold">Mock products</h2>
        <ul className="list-disc pl-4">
          {mockProducts.map((p) => (
            <li key={p.id}>{p.title} - ${p.price}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

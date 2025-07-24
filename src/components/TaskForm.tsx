import { useState, useEffect, FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import { createTask, editTask } from '../store/effects/tasksEffects';
import type { Task } from '../types';
import type { AppDispatch } from '../store/store';

interface Props {
  current: Task | null;
}

export default function TaskForm({ current }: Props) {
  const dispatch = useDispatch<AppDispatch>();
  const [text, setText] = useState('');
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    if (current) {
      setText(current.text);
      setCompleted(current.completed);
    } else {
      setText('');
      setCompleted(false);
    }
  }, [current]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const task = { text, completed, id: current?.id } as Task;
    if (current) {
      dispatch(editTask(task));
    } else {
      dispatch(createTask({ text, completed }));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2 p-4 bg-white rounded shadow">
      <input
        className="w-full border p-2 rounded"
        placeholder="Task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => setCompleted(e.target.checked)}
        />
        Completed
      </label>
      <button
        type="submit"
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        {current ? 'Update' : 'Add'} Task
      </button>
    </form>
  );
}

import React, { useEffect } from 'react';
import { FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos } from '../store/actions';
import TodoItem from './TodoItem';

export default function TodoList() {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <FlatList
      data={todos}
      keyExtractor={item => item.id}
      renderItem={({ item }) => <TodoItem item={item} />}
    />
  );
}

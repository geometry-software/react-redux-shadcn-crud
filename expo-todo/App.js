import React from 'react';
import { Provider } from 'react-redux';
import { SafeAreaView, StyleSheet } from 'react-native';
import store from './store';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <TodoInput />
        <TodoList />
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

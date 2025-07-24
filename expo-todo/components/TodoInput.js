import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { addTodo } from '../store/actions';

export default function TodoInput() {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const submit = () => {
    if (!text.trim()) return;
    dispatch(addTodo(text));
    setText('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={setText}
        placeholder="Add todo"
      />
      <Button title="Add" onPress={submit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 8,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    marginRight: 8,
    padding: 8,
  },
});

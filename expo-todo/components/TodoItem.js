import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { removeTodo } from '../store/actions';

export default function TodoItem({ item }) {
  const dispatch = useDispatch();
  return (
    <View style={styles.item}>
      <Text style={styles.text}>{item.text}</Text>
      <Button title="Done" onPress={() => dispatch(removeTodo(item.id))} />
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  text: {
    flex: 1,
  },
});

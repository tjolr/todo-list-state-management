import { Box } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';
import React from 'react';
import { TodoListProvider } from '../store/context';
import CompletedTodos from './CompletedTodos';
import TodoList from './TodoList';

const TodoListApp = () => {
  return (
    <Box
      p={5}
      color='white'
      display='flex'
      flexDirection='column'
      alignItems='center'
    >
      <Text fontSize='6xl'>Todolist</Text>

      <TodoListProvider>
        <TodoList />

        <CompletedTodos />
      </TodoListProvider>
    </Box>
  );
};

export default TodoListApp;

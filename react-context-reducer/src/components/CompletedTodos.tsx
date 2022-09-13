import { Box, Text } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { TodoListContext } from '../store/context';
import { filterCompletedTodos } from '../store/selectors';
import { TodoItemType } from '../store/types';
import TodoItem from './TodoItem';

const CompletedTodos = () => {
  const { state } = useContext(TodoListContext);
  const completedTodos = filterCompletedTodos(state.todos);

  if (completedTodos.length === 0) return null;

  return (
    <Box display='flex' flexDir='column' mt={12} width='container.sm'>
      <Text fontSize='2xl' align='center'>
        Completed todo's
      </Text>

      {completedTodos.map((todo: TodoItemType) => (
        <TodoItem {...todo} key={todo.id} />
      ))}
    </Box>
  );
};

export default CompletedTodos;

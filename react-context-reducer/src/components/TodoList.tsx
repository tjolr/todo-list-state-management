import { Box } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { TodoListContext } from '../store/context';
import { filterUncompletedTodos } from '../store/selectors';
import { TodoItemType } from '../store/types';
import NewTodoInput from './NewTodoInput';
import TodoItem from './TodoItem';

const TodoList = () => {
  const { state } = useContext(TodoListContext);
  const uncompletedTodos = filterUncompletedTodos(state.todos);

  return (
    <Box display='flex' flexDir='column' width='container.sm'>
      <NewTodoInput />

      {uncompletedTodos.map((todo: TodoItemType) => (
        <TodoItem {...todo} key={todo.id} />
      ))}
    </Box>
  );
};

export default TodoList;

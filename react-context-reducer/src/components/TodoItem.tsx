import { CloseIcon } from '@chakra-ui/icons';
import { Box, Checkbox, IconButton } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { TodoListContext } from '../store/context';
import { Actions, TodoItemType } from '../store/types';

const TodoItem = ({ title, id, completed }: TodoItemType) => {
  const { dispatch } = useContext(TodoListContext);

  const deleteTodoItem = () => {
    dispatch({ type: Actions.DeleteTodo, payload: { id } });
  };

  const toggleCompleteTodo = () => {
    dispatch({ type: Actions.ToggleCompleteTodo, payload: { id } });
  };

  return (
    <Box
      display='flex'
      justifyContent='space-between'
      alignItems='center'
      gap='2'
      mt={5}
    >
      <Checkbox
        colorScheme='blue'
        size='md'
        isChecked={completed}
        onChange={toggleCompleteTodo}
        style={{ textDecoration: completed ? 'line-through' : 'none' }}
      >
        {title}
      </Checkbox>

      <IconButton
        aria-label='Close'
        colorScheme='blue'
        size='sm'
        variant='ghost'
        icon={<CloseIcon />}
        onClick={deleteTodoItem}
      />
    </Box>
  );
};

export default TodoItem;

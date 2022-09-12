import { Box } from "@chakra-ui/react";
import React, { useContext } from "react";
import { TodoListContext } from "../store/context";
import { TodoItemType } from "../store/types";
import NewTodoInput from "./NewTodoInput";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const { state } = useContext(TodoListContext);

  return (
    <Box display='flex' flexDir='column'>
      <NewTodoInput />

      {state.todos.map((todo: TodoItemType) => (
        <TodoItem {...todo} key={todo.id} />
      ))}
    </Box>
  );
};

export default TodoList;

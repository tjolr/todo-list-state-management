import { Box } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import React, { memo } from "react";
import { TodoListProvider } from "../store/context";
import TodoList from "./TodoList";

const TodoListApp = memo(() => {
  return (
    <Box
      bg='gray.900'
      w='100%'
      h='calc(100vh)'
      p={5}
      color='white'
      display='flex'
      flexDirection='column'
      alignItems='center'
    >
      <Text fontSize='6xl'>Todolist</Text>

      <TodoListProvider>
        <TodoList />{" "}
      </TodoListProvider>
    </Box>
  );
});

export default TodoListApp;

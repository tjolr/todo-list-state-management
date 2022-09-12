import { Box, Button, Input } from "@chakra-ui/react";
import React, { FormEvent, useContext, useState } from "react";
import uuid from "react-uuid";
import { TodoListContext } from "../store/context";
import { Actions } from "../store/types";

const NewTodoInput = () => {
  const { dispatch } = useContext(TodoListContext);

  const [newTodo, setNewTodo] = useState<string>("");

  const addTodo = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newTodo === "") return;

    dispatch({
      type: Actions.AddTodo,
      payload: {
        id: uuid(),
        title: newTodo,
      },
    });
    setNewTodo("");
  };
  return (
    <form onSubmit={addTodo}>
      <Box display='flex' mt='5'>
        <Input
          placeholder='New todo'
          mr='3'
          value={newTodo}
          onChange={(e) => setNewTodo(e.currentTarget.value)}
        />
        <Button colorScheme='blue' type='submit'>
          {" "}
          Add
        </Button>
      </Box>
    </form>
  );
};

export default NewTodoInput;

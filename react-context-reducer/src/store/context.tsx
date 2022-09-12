import React, { createContext, useReducer, Dispatch } from "react";
import { todoListReducer } from "./todoListReducer";
import { TodoActions, TodoListState } from "./types";

const initialState: TodoListState = {
  todos: [],
};

export const TodoListContext = createContext<{
  state: TodoListState;
  dispatch: Dispatch<TodoActions>;
}>({ state: initialState, dispatch: () => null });

export const TodoListProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(todoListReducer, initialState);

  return (
    <TodoListContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoListContext.Provider>
  );
};

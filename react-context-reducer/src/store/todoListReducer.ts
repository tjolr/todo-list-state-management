import { Actions, TodoActions, TodoItemType, TodoListState } from "./types";

export const todoListReducer = (state: TodoListState, action: TodoActions) => {
  switch (action.type) {
    case Actions.AddTodo:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case Actions.DeleteTodo:
      return {
        ...state,
        todos: [
          ...state.todos.filter(
            (item: TodoItemType) => item.id !== action.payload.id
          ),
        ],
      };
    default:
      return state;
  }
};

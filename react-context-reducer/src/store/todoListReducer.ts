import { Actions, TodoActions, TodoItemType, TodoListState } from './types';

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
    case Actions.ToggleCompleteTodo:
      return {
        ...state,
        todos: [
          ...state.todos.map((item: TodoItemType) => {
            if (item.id === action.payload.id) {
              return {
                ...item,
                completed: !item.completed,
              };
            }
            return item;
          }),
        ],
      };
    default:
      return state;
  }
};

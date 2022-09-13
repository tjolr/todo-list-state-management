export type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};

export enum Actions {
  AddTodo = 'AddTodo',
  DeleteTodo = 'DeleteTodo',
  ToggleCompleteTodo = 'ToggleCompleteTodo',
}

type TodoListPayload = {
  [Actions.AddTodo]: TodoItemType;
  [Actions.DeleteTodo]: {
    id: string;
  };
  [Actions.ToggleCompleteTodo]: {
    id: string;
  };
};

export type TodoItemType = {
  id: string;
  title: string;
  completed: boolean;
};

export interface TodoListState {
  todos: TodoItemType[];
}

export type TodoActions = ActionMap<TodoListPayload>[keyof ActionMap<TodoListPayload>];

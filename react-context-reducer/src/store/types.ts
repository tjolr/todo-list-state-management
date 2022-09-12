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
  AddTodo = "AddTodo",
  DeleteTodo = "DeleteTodo",
}

type TodoListPayload = {
  [Actions.AddTodo]: {
    id: string;
    title: string;
  };
  [Actions.DeleteTodo]: {
    id: string;
  };
};

export type TodoItemType = {
  id: string;
  title: string;
};

export interface TodoListState {
  todos: TodoItemType[];
}

export type TodoActions = ActionMap<TodoListPayload>[keyof ActionMap<TodoListPayload>];

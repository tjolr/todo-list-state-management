import { TodoItemType } from './types';

export const filterUncompletedTodos = (todos: TodoItemType[]): TodoItemType[] =>
  todos.filter((item: TodoItemType) => item.completed === false);
export const filterCompletedTodos = (todos: TodoItemType[]): TodoItemType[] =>
  todos.filter((item: TodoItemType) => item.completed === true);

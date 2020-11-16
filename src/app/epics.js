import {combineEpics} from 'redux-observable';
import {fetchTodos, createTodo, deleteTodo} from '../features/todo-list/todo-list-epics.js';

export const rootEpic = combineEpics(
    fetchTodos,
    createTodo,
    deleteTodo
);

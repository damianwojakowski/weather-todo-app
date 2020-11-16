import {combineEpics} from 'redux-observable';
import {fetchTodos} from '../features/todo-list/todo-list-epics.js';

export const rootEpic = combineEpics(
    fetchTodos
);

import { ajax } from 'rxjs/ajax';
import { ofType } from 'redux-observable';
import { mergeMap, map } from 'rxjs/operators';
import {ACTIONS, listTodos, todoCreated} from './todo-list-actions.js';

export const fetchTodos = action$ => action$.pipe(
    ofType(ACTIONS.FETCH_TODOS),
    mergeMap(() =>
        ajax.getJSON(`/api/todo/list`).pipe(
            map(response => listTodos(response.data))
        )
    )
);

export const createTodo = action$ => action$.pipe(
    ofType(ACTIONS.CREATE_TODO),
    mergeMap(() =>
        ajax({
            url: `/api/todo/create`,
            method: 'POST'
        }).pipe(
            map(response => todoCreated(response.data))
        )
    )
);

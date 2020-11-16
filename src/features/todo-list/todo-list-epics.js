import { ajax } from 'rxjs/ajax';
import { ofType } from 'redux-observable';
import { mergeMap, map } from 'rxjs/operators';
import {ACTIONS, listTodos, todoCreated} from './todo-list-actions.js';

const headers = {
    'Content-Type': 'application/json'
};

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
    mergeMap(action =>
        ajax({
            url: `/api/todo/create`,
            method: 'POST',
            headers: headers,
            body: {
                priority: action.payload.priority,
                title: action.payload.title,
                description: action.payload.description
            }
        }).pipe(
            map(response => response.response.data),
            map(response => todoCreated(response))
        )
    )
);

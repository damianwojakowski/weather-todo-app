import { ajax } from 'rxjs/ajax';
import { ofType } from 'redux-observable';
import { mergeMap, map } from 'rxjs/operators';
import {ACTIONS, listTodos} from './todo-list-actions.js';

export const fetchTodos = action$ => action$.pipe(
    ofType(ACTIONS.FETCH_TODOS),
    mergeMap(() =>
        ajax.getJSON(`/api/todo/list`).pipe(
            map(response => listTodos(response.data))
        )
    )
);

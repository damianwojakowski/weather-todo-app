export const ACTIONS = {
    LIST: 'LIST',
    FETCH_TODOS: 'FETCH_TODOS',
    CREATE_TODO: 'CREATE_TODO',
    TODO_CREATED: 'TODO_CREATED',
    DELETE_TODO: 'DELETE_TODO',
    TODO_DELETED: 'TODO_DELETED',
    UPDATE_TODO: 'UPDATE_TODO',
    TODO_UPDATED: 'TODO_UPDATED'
};

export function listTodos(payload) {
    return {
        type: ACTIONS.LIST,
        payload
    };
}

export function fetchTodos() {
    return {
        type: ACTIONS.FETCH_TODOS
    };
}

export function createTodo(payload) {
    return {
        type: ACTIONS.CREATE_TODO,
        payload
    };
}

export function todoCreated(payload) {
    return {
        type: ACTIONS.TODO_CREATED,
        payload
    };
}

export function deleteTodo(payload) {
    return {
        type: ACTIONS.DELETE_TODO,
        payload
    };
}

export function todoDeleted(payload) {
    return {
        type: ACTIONS.TODO_DELETED,
        payload
    };
}

export function updateTodo(payload) {
    return {
        type: ACTIONS.UPDATE_TODO,
        payload
    };
}

export function todoUpdated(payload) {
    return {
        type: ACTIONS.TODO_UPDATED,
        payload
    };
}

export const ACTIONS = {
    LIST: 'LIST',
    FETCH_TODOS: 'FETCH_TODOS',
    CREATE_TODO: 'CREATE_TODO',
    TODO_CREATED: 'TODO_CREATED'
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

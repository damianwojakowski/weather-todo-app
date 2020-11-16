export const ACTIONS = {
    LIST: "LIST",
    FETCH_TODOS: "FETCH_TODOS"
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

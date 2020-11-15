export const ACTIONS = {
    LIST: "LIST"
};

export function listTodos(payload) {
    return {
        type: ACTIONS.LIST,
        payload
    };
}

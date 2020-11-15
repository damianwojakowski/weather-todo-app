import {ACTIONS} from "./todo-list-actions";

const initialState = {
    todos: [{
        id: 1,
        uuid: "1",
        title: "",
        description: "",
        priority: 1,
        createdA: "",
        updatedAt: "",
    }]
};

function todosReducer(state = initialState, action) {
    if (action.type === ACTIONS.LIST) {
        return Object.assign({}, state, {
            todos: action.payload
        });
    }

    return state;
}

export default todosReducer;

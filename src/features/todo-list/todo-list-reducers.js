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
    } else if (action.type === ACTIONS.TODO_CREATED) {
        return Object.assign({}, state, {
            todos: state.todos.concat(action.payload)
        });
    } else if (action.type === ACTIONS.TODO_DELETED) {
        console.log(action.payload);
        return Object.assign({}, state, {
            todos: state.todos.filter(todo => parseInt(todo.id) !== parseInt(action.payload.id))
        });
    }

    return state;
}

export default todosReducer;

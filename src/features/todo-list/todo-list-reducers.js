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
        return Object.assign({}, state, {
            todos: state.todos.filter(todo => parseInt(todo.id) !== parseInt(action.payload.id))
        });
    } else if (action.type === ACTIONS.TODO_UPDATED) {
        return Object.assign({}, state, {
            todos: state.todos.map(todo => {
                if (parseInt(todo.id) !== parseInt(action.payload.id)) {
                    return todo;
                } else {
                    return action.payload;
                }
            })
        });
    }

    return state;
}

export default todosReducer;

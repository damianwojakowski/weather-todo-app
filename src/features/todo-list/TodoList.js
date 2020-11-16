import React, {Component} from 'react';
import uuid from 'react-uuid';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {fetchTodos, createTodo, deleteTodo, updateTodo} from './todo-list-actions.js';
import TodoItem from './TodoItem.js';
import TodoItemEditor from './TodoItemEditor.js';

const EDIT_MODE_TYPES = {
    EDIT: 'EDIT',
    CREATE_NEW: 'CREATE_NEW',
    NONE: ''
};

class TodoList extends Component {

    constructor(props) {
        super(props);
        this.addEmptyTodo = this.addEmptyTodo.bind(this);
        this.closeTodoEditor = this.closeTodoEditor.bind(this);
        this.createOrUpdateTodo = this.createOrUpdateTodo.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this);
        this.editTodo = this.editTodo.bind(this);

        this.state = {
            editMode: false,
            editModeType: "",
            editedTodo: null
        };
    }

    render() {
        return <div className="container">
            <h2>Todo Items</h2> <button className="btn btn-success" onClick={this.addEmptyTodo}>Create Todo</button>
            <table className="table table-striped">
                <thead>
                <tr>
                    <th scope="col">Priority</th>
                    <th scope="col">Title</th>
                    <th scope="col">Description</th>
                    <th scope="col">Actions</th>
                </tr>
                </thead>
                <tbody>
                {this.props.todos.map((todo) => {
                    return <TodoItem delteTodo={this.deleteTodo} editTodo={this.editTodo} key={todo.uuid} todo={todo}/>
                })}
                </tbody>
            </table>

            {this.isInEditMode() && <TodoItemEditor
                cancelButtonHandler={this.closeTodoEditor}
                saveButtonHandler={this.createOrUpdateTodo}
                editedTodo={this.state.editedTodo}
            />
            }
        </div>;
    }

    componentDidMount() {
        this.props.fetchTodos();
    }

    isInEditMode() {
        return this.state.editMode;
    }

    addEmptyTodo() {
        this.setState({
            editMode: true,
            editModeType: EDIT_MODE_TYPES.CREATE_NEW,
            editedTodo: null
        });
    }

    closeTodoEditor() {
        this.setState({
            editMode: false,
            editModeType: EDIT_MODE_TYPES.NONE,
            editedTodo: null
        });
    }

    createOrUpdateTodo(todoItem) {
        if (this.state.editModeType === EDIT_MODE_TYPES.CREATE_NEW) {
            this.createNewTodo(todoItem);
        } else if (this.state.editModeType === EDIT_MODE_TYPES.EDIT) {
            this.updateTodo(todoItem);
        }

        this.closeTodoEditor();
    }

    createNewTodo(todoItem) {
        todoItem.uuid = uuid();
        this.props.createTodo(todoItem);
    }

    updateTodo(todoItem) {
        this.props.updateTodo(todoItem);
    }

    deleteTodo(todoId) {
        console.log('deleteTodo ', todoId);
        this.props.deleteTodo(todoId);
    }

    editTodo(todoId) {
        this.setState({
            editMode: true,
            editModeType: EDIT_MODE_TYPES.EDIT,
            editedTodo: this.getEditedTodo(todoId)
        });
    }

    getEditedTodo(todoId) {
        let a = this.props.todos.filter(todo => todo.id === todoId);
        return a.pop();
    }

}

const mapStateToProps = state => {
    return {
        todos: state.todos.todos,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchTodos: todos => dispatch(fetchTodos()),
        createTodo: todo => dispatch(createTodo(todo)),
        deleteTodo: todo => dispatch(deleteTodo(todo)),
        updateTodo: todo => dispatch(updateTodo(todo)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        uuid: PropTypes.string,
        title: PropTypes.string,
        description: PropTypes.string,
        priority: PropTypes.number,
        createdA: PropTypes.string,
        updatedAt: PropTypes.string,
    }))
};
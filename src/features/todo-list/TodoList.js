import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {fetchTodos, createTodo} from './todo-list-actions.js';
import TodoItem from './TodoItem.js';
import TodoItemEditor from './TodoItemEditor.js';

const EDIT_MODE_TYPES = {
    EDIT: 'EDIT',
    CREATE_NEW: 'CREATE_NEW'
};

class TodoList extends Component {

    constructor(props) {
        super(props);
        this.addEmptyTodo = this.addEmptyTodo.bind(this);
        this.state = {
            editMode: false,
            modeType: ""
        };
    }

    render() {
        return <div className="container">
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
                    return <TodoItem key={todo.uuid} todo={todo}/>
                })}
                </tbody>
            </table>

            <button className="btn btn-success" onClick={this.addEmptyTodo}>Create Todo</button>

            {this.isInEditMode() && <TodoItemEditor />}
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
            modeType: EDIT_MODE_TYPES.CREATE_NEW
        });
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
        createTodo: todo => dispatch(createTodo(todo))
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
import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {listTodos} from './todo-list-actions.js';
import TodoItem from './TodoItem.js';

class TodoList extends Component {

    render() {
        return <div className="container">
            <h1>TODO List</h1>
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
                        return <TodoItem key={todo.uuid} todo={todo} />
                    })}
                </tbody>
            </table>
        </div>;
    }

}

const mapStateToProps = state => {
    return {
        todos: state.todos.todos,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        listTodos: todos => dispatch(listTodos(todos))
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
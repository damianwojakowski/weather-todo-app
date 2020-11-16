import React, {Component} from 'react';

export default class TodoItem extends Component {

    constructor(props) {
        super(props);
    }

    deleteTodo(todoId) {
        this.props.delteTodo(todoId);
    }

    editTodo(todoId) {
        this.props.editTodo(todoId);
    }

    render() {
        return <tr>
            <th scope="row">{this.props.todo.priority}</th>
            <td>{this.props.todo.title}</td>
            <td>{this.props.todo.description}</td>
            <td>
                <button onClick={() => {this.deleteTodo(this.props.todo.id)}} className="btn btn-danger">Delete</button>&nbsp;
                <button onClick={() => {this.editTodo(this.props.todo.id)}} className="btn btn-primary">Edit</button></td>
        </tr>;
    }
}
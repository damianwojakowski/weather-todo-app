import React, {Component} from 'react';

export default class TodoItem extends Component {
    render() {
        return <tr>
            <th scope="row">{this.props.todo.priority}</th>
            <td>{this.props.todo.title}</td>
            <td>{this.props.todo.description}</td>
            <td>
                <button className="btn btn-danger">Delete</button>&nbsp;
                <button className="btn btn-primary">Edit</button></td>
        </tr>;
    }
}
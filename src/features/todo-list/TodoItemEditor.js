import React, {Component} from 'react';

import './TodoItemEditor.css';

export default class TodoItemEditor extends Component {

    constructor(props) {
        super(props);
        this.saveButtonHandler = this.saveButtonHandler.bind(this);
        this.cancelButtonHandler = this.cancelButtonHandler.bind(this);
        this.handleTodoChange = this.handleTodoChange.bind(this);
        this.state = {
            id: null,
            uuid: null,
            title: "",
            description: "",
            priority: 1,
            createdA: null,
            updatedAt: null
        };
    }

    cancelButtonHandler() {
        this.props.cancelButtonHandler();
    }

    saveButtonHandler(event) {
        event.preventDefault();
        this.props.saveButtonHandler(this.state);
    }

    handleTodoChange(event) {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <div className="popup">
                <div className="popup_content">
                    <form>
                        <div className="form-group">
                            <label htmlFor="priority">Priority</label>
                            <select value={this.state.priority} onChange={this.handleTodoChange} name="priority" className="form-control" id="priority">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="title">Title</label>
                            <input name="title" value={this.state.title} onChange={this.handleTodoChange} type="text" className="form-control" id="title" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <textarea name="description" value={this.state.description} onChange={this.handleTodoChange} className="form-control" id="description" rows="5" />
                        </div>

                        <div>
                            <button type="button" onClick={this.cancelButtonHandler} className="btn btn-danger">Cancel</button>&nbsp;
                            <button type="submit" onClick={this.saveButtonHandler} className="btn btn-primary">Save</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }

}
import React, {Component} from 'react';

import './TodoItemEditor.css';

export default class TodoItemEditor extends Component {

    constructor(props) {
        super(props);
    }

    cancelButtonClicked() {
        return this.props.handleCancelButton;
    }

    render() {
        return (
            <div className="popup">
                <div className="popup_content">
                    <form>
                        <div className="form-group">
                            <label htmlFor="priority">Priority</label>
                            <select className="form-control" id="priority">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="title">Title</label>
                            <input type="text" className="form-control" id="title" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <textarea className="form-control" id="description" rows="5" />
                        </div>
                    </form>

                    <div>
                        <button onClick={this.cancelButtonClicked()} className="btn btn-danger">Cancel</button>&nbsp;
                        <button className="btn btn-primary">Save</button>
                    </div>
                </div>
            </div>
        );
    }

}
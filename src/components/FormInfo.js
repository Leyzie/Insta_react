import React, { Component } from 'react'

export default class FormInfo extends Component {
    render() {
        return (
            <div className="form_cont">
                <form onSubmit={this.props.MethodInfo}>
                    <div className="form-group">
                        <input type="text" name="tocen" className="form-control" placeholder="Tocen" />
                    </div>
                    <div className="form-group">
                        <input type="text" name="user" className="form-control" placeholder="User name" />
                    </div>
                    <button className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}

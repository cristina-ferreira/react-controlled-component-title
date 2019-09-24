import React, { Component } from "react";

class MyTitleForm extends Component {
    constructor(props) {
        super(props);
        this.state = { title: "" };
    }

    handleChange = event => {
        const noStar = /[*]/g;
        this.setState({ title: event.target.value.replace(noStar, "") });
    };

    render() {
        return (
            <div>
                <label htmlFor="title">Title :</label>
                <input
                    id="title"
                    type="text"
                    placeholder="Choose a new title..."
                    value={this.state.title}
                    onChange={this.handleChange}
                />
		<h1>{this.state.title}</h1>
            </div>
        );
    }
}
export default MyTitleForm

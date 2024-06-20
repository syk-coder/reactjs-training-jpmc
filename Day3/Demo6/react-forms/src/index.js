import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import App from './App'

export default class Index extends Component {
    constructor() {
        super();
        this.state = {
            firstName: '',
            lastName: '',
            age: '',
            gender: '',
            location: '',
            angular: false,
            reactjs: false,
            nodejs: false
        };
    }

    handleChange = (e) => {
        const { value, name, type, checked } = e.target;

        type === "checkbox"
            ? this.setState({ [name]: checked })
            : this.setState({ [name]: value })
    }
    render() {
        return (
            <div>
                <App handleChange={this.handleChange} {... this.state} />
            </div>
        )
    }
}
ReactDOM.render(<Index />, document.getElementById("root"));
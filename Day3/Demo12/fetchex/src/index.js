import React, { Component } from 'react'
import ReactDOM from 'react-dom'

export default class Index extends Component {
    componentDidMount() {
        fetch('https://api.github.com/users/hacktivist123/repos')
            .then(response => response.json())
            .then(data => console.log(data)
            );
    }

    render() {
        return (
            <div>
                <h1>Call API With Fetch Method</h1>
            </div>
        )
    }
}

ReactDOM.render(<Index />, document.getElementById("root"));
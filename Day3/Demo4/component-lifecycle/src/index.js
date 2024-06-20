// import React, { Component } from 'react'
// import ReactDOM from 'react-dom'

// export default class Index extends Component {
//     constructor(props) {
//         console.log("constructor called !!");
//         super(props);
//         this.state = {
//             name: "Ajeet Kumar",
//             age: props.age
//         };
//     }
//     render() {
//         console.log("render method called !!");
//         return (
//             <div>
//                 <h1>My Name is {this.state.name}</h1>
//                 <h2>And Age is {this.state.age}</h2>
//             </div>
//         )
//     }
//     componentDidMount(){
//         console.log("Mount");
//     }
//     componentDidUpdate(){
//         console.log("Updating");
//     }
//     componentWillUnmount(){
//         console.log("Component unmounting......");
//     }
// }
// ReactDOM.render(<Index age={30} />, document.getElementById("root"));





import React, { Component } from 'react'
import ReactDOM from 'react-dom'

export default class Index extends Component {
    constructor() {
        console.log("constructor called !!");
        super();
        this.state = {
            name: "Chandan Kumar"
        };
    }
    // static getDerivedStateFromProps(props, state) {
    //     console.log("getDerivedStateFromProps called !!");
    //     return {
    //         name: "Pawan Kumar"
    //     };
    // }
    // componentDidMount() {
    //     console.log("componentDidMount Mewthod called !!");
    //     setTimeout(() => {
    //         this.setState({ name: 'Rahul' });
    //     }, 3000);
    // }

    changeName = () => {
        this.setState({ name: 'Mohan' });
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log(nextState);
    //     return true

    //   // return false;
    // }

    getSnapshotBeforeUpdate = (prevProps, prevState) => {
        console.log("getSnapshotBeforeUpdate :", prevProps);
        console.log("getSnapshotBeforeUpdate :", prevState);
        return null;
    }
    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate :", this.props);
        console.log("componentDidUpdate :", this.state);
    }

    render() {
        console.log("render method called !!");
        return (
            <div>
                <h1>My Name is {this.state.name}</h1>
                <button type="button" onClick={this.changeName} >Change</button>
            </div>
        )
    }
}
ReactDOM.render(<Index name="Ajeet" />, document.getElementById("root"));

// import React, { Component } from 'react'
// import ReactDOM from 'react-dom'

// export default class Index extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             name: 'Ajeet Kumar',
//             rollNo: 102,
//             emailId: this.props.emailId,
//             counter: 1
//         };
//     }

    // changeData = () => {
    //     this.setState({
    //         name: "Chandan Singh",
    //         rollNo: 502,
    //         emailId: "chandan@gmail.com",
    //         counter: this.state.counter + 1
    //     });
    // }


    // changeData = () => {
    //     this.setState((state) => ({
    //                 name: "Chandan Singh",
    //                 rollNo: 502,
    //                 emailId: "chandan@gmail.com",
    //                 counter: state.counter + 1
    //     }));
    // }


//     // changeData = () => {
//     //     this.setState((s) => ({
//     //                 name: "Chandan Singh",
//     //                 rollNo: 502,
//     //                 emailId: "chandan@gmail.com",
//     //                 counter: s.counter + 1
//     //     }));
//     // }


//     // changeData = () => {
//     //     this.setState((s) => ({
//     //                 name: "Chandan Singh",
//     //                 rollNo: 502,
//     //                 emailId: this.props.emailId + " (Updated)",
//     //                 counter: s.counter + 1
//     //     }));
//     // }

//     changeData = () => {
//         this.setState((state, props) => ({
//             name: "Chandan Singh",
//             rollNo: 502,
//             emailId: props.emailId + " (Updated)",
//             counter: state.counter + 1
//         }));
//     }

    // myFunction = (n) => {
    //     console.log("Hello World"+n);
    // }

    
//     render() {
//         return (
//             <>
//                 <h1>My Name is {this.state.name}</h1>
//                 <h2>And My RollNo is {this.state.rollNo}</h2>
//                 <h3>And My Email Id is {this.state.emailId}</h3>
//                 <h1>Counter : {this.state.counter}</h1>

//                 {/* <button type="button" onClick={() => this.changeData()} >Update Data</button> */}
//                 <button type="button" onClick={this.myFunction('Rakesh')} >Update Data</button>
//             </>
//         )
//     }
// }


// ReactDOM.render(<Index emailId="ajeetsingha@gmail.com" />, document.getElementById("root"));



// import React, { Component } from 'react'
// import ReactDOM from 'react-dom'

// export default class Index extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             name: 'Ajeet Kumar',
//             rollNo: 102,
//             emailId: "ajeet@gmail.com",
//             counter: 1
//         };
//     }

//     changeData = () => {
//         this.setState((state, props) => ({
//             name: "Chandan Singh",
//             rollNo: 502,
//             emailId: props.emailId,
//             counter: state.counter + 1
//         }));
//     }


//     // changeData = () => {
//     //     this.setState(function (state, props) {
//     //        return ({
//     //             name: "Chandan Singh",
//     //             rollNo: 502,
//     //             emailId: props.emailId,
//     //             counter: state.counter + 1
//     //         })
//     //     });
//     // }


//     changeData = () => {
//         this.setState((state, props) => {
//             return ({
//                 name: "Chandan Singh",
//                 rollNo: 502,
//                 emailId: props.emailId,
//                 counter: state.counter + 1
//             })
//         });
//     }

//     render() {
//         return (
//             <>
//                 <h1>My Name is {this.state.name}</h1>
//                 <h2>And My RollNo is {this.state.rollNo}</h2>
//                 <h3>And My Email Id is {this.state.emailId}</h3>
//                 <h1>Counter : {this.state.counter}</h1>

//                 {/* <button type="button" onClick={() => this.changeData()} >Update Data</button> */}
//                 <button type="button" onClick={this.changeData} >Update Data</button>
//             </>
//         )
//     }
// }


// ReactDOM.render(<Index emailId="chandansingha@gmail.com" />, document.getElementById("root"));


// import React, { Component } from 'react'
// import ReactDOM from 'react-dom'

// export default class Index extends Component {
//     constructor() {
//         super();
//         this.state = {
//             counter: 1
//         };
//     }


//     changeData = () => {
//         console.log("Before Change : " + this.state.counter);
//         this.setState((state) => {
//             return ({
//                 counter: state.counter + 1
//             })
//         });
//         console.log("After Change : " + this.state.counter);
//     }

//     // changeData = () => {
//     //     console.log("Before Change : " + this.state.counter);
//     //     this.setState((state) => {
//     //         return ({
//     //             counter: state.counter + 1
//     //         })
//     //     }, () => console.log("After Change : " + this.state.counter));
//     // }


//     changeData = () => {
//         console.log("Before Change : " + this.state.counter);
//         this.setState((state) => {
//             return ({
//                 counter: state.counter + 1
//             })
//         }, () =>  this.showMsg());
//     }

//     showMsg() {
//         console.log("After Change : " + this.state.counter);
//     }
//     render() {
//         return (
//             <>
//                 <h1>Counter : {this.state.counter}</h1>

//                 {/* <button type="button" onClick={() => this.changeData()} >Update Data</button> */}
//                 <button type="button" onClick={this.changeData} >Update Data</button>
//             </>
//         )
//     }
// }


// ReactDOM.render(<Index emailId="chandansingha@gmail.com" />, document.getElementById("root"));


// import React from 'react'
// import ReactDOM from 'react-dom'

// function showMsg() {
//     alert("Hello Sahosoft !!");
// }

// function Index() {
//     return (
//         <button type="button" onClick={showMsg} >Show Message</button>
//     )
// }

// ReactDOM.render(<Index />, document.getElementById("root"));




// import React, { Component } from 'react'
// import ReactDOM from 'react-dom'

// export default class Index extends Component {
//     showMsg(e) {
//         e.preventDefault();
//         //alert("Hello Sahosoft !!");
//     }

//     render() {
//         return (
//             <div>
//                 <a href="saho.com" onClick={this.showMsg} >  Click_Me  </a>
//             </div>
//         )
//     }
// }

// ReactDOM.render(<Index />, document.getElementById("root"));


// import React, { Component } from 'react'
// import ReactDOM from 'react-dom'

// export default class Index extends Component {

//     constructor() {
//         super();
//         this.showMsg = this.showMsg.bind(this);
//     }

//     showMsg() {
//         alert("Hello Sahosoft !!");
//         console.log(this.props.name);
//     }

//     render() {
//         return (
//             <div>
//                 <button type="button" onClick={this.showMsg} >Show Message</button>
//             </div>
//         )
//     }
// }

// ReactDOM.render(<Index name="Ajeet" />, document.getElementById("root"));







// import React, { Component } from 'react'
// import ReactDOM from 'react-dom'

// export default class Index extends Component {

//     constructor() {
//         super();
//        //this.showMsg = this.showMsg.bind(this);
//     }

//     // showMsg() {
//     //     console.log(this);
//     // }

    // showMsg(msg) {
    //     console.log(this);
    //     alert(msg);
    // }

//     showMsg(a, b) {
//         console.log(this);
//         alert("Sum : " + (a + b));
//     }

//     render() {
//         return (
//             <div>
//                 {/* <button type="button" onClick={this.showMsg} >Show Message</button> */}
//                 {/* <button type="button" onClick={this.showMsg("Hello Sahosoft")} >Show Message</button> */}

//                 {/* <button type="button" onClick={() => this.showMsg("Hello Sahosoft")} >Show Message</button> */}
//                 {/*<button type="button" onClick={() => this.showMsg(10,20)} >Show Message</button>*/}
//                 <button type="button" onClick={this.showMsg("Hello Sahosoft")} >Show Message</button> 
//             </div>
//         )
//     }
// }

// ReactDOM.render(<Index />, document.getElementById("root"));



// import React, { Component } from 'react'
// import ReactDOM from 'react-dom'

// class ShowCount extends Component {
//     render() {
//         return (
//             <div>
//                 <h1>Show Count Component (Child Component)</h1>
//                 Counter : {this.props.Counter}
//             </div>
//         )
//     }
// }

// class Index extends Component {
//     constructor() {
//         super();
//         this.state = { count: 10 };
//     }

//     handleIncrement = () => {
//         this.setState((state) => ({
//             count: state.count + 1
//         })
//         );
//     }

//     handleDecrement = () => {
//         this.setState((state) => ({
//             count: state.count - 1
//         })
//         );
//     }

//     render() {
//         return (
//             <div>
//                 <h1>Index Component (Parent Component)</h1>
//                 <button type="button" onClick={this.handleIncrement} >Increment by 1</button>
//                 <button type="button" onClick={this.handleDecrement} >Decrement by 1</button>
//                 <br />
//                 <ShowCount Counter={this.state.count} />
//             </div>
//         )
//     }
// }

// ReactDOM.render(<Index />, document.getElementById("root"));



import React, { Component } from 'react'
import ReactDOM from 'react-dom'

export default class Child extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: ''
        };
    }

    handleInput = (event) => {
        this.setState({
            username: event.target.value,
            password: event.target.value
        }, () => {
            if (this.props.nameHandler) {
                //console.log(this.props.nameHandler);
                this.props.nameHandler(this.state);
                //this.props.nameHandler(this.state.username);
            }
        });
    }

    handleNameInput = (event) => {
        this.setState({
            username: event.target.value
        }, () => {
            if (this.props.nameHandler) {
                //console.log(this.props.nameHandler);
                this.props.nameHandler(this.state);
                //this.props.nameHandler(this.state.username);
            }
        });
    }
    handlePasswordInput = (event) => {
        this.setState({
            password: event.target.value
        }, () => {
            if (this.props.nameHandler) {
                //console.log(this.props.nameHandler);
                this.props.nameHandler(this.state);
                //this.props.nameHandler(this.state.username);
            }
        });
    }

    render() {
        return (
            <div>
                <h1>Child component </h1>
                UserName :   <input type="text" onChange={this.handleNameInput} />
                <br />
                Password :   <input type="text" onChange={this.handlePasswordInput} />
                <h2>Entered Name : {this.state.username}</h2>
                <h2>Entered Password : {this.state.password}</h2>
            </div>
        )
    }
}

function Index() {
    const getState = (data) => {
        console.log("In Parent Component : ", data);
    }

    return (
        <div>
            <h1>Parent Component</h1>
            <Child nameHandler={getState} />
        </div>
    )
}


ReactDOM.render(<Index />, document.getElementById("root"));





// import React from 'react'
// import ReactDOM from 'react-dom'

// function Index() {
//     return (
//         <div>
//             { (5<12) &&  alert("Hi Sahosoft !!")}
//         </div>
//     );
// }

// ReactDOM.render(<Index />, document.getElementById("root"));


// import React from 'react'
// import ReactDOM from 'react-dom'

// function MailBox(props) {
//     const unreadMsg = props.unreadMessage;

//     return (
//         <div>
//             <h1>Inbox</h1>

//             <h2>You have {unreadMsg.length} unread Message</h2>
//         </div>
//     );

// }

// const Message = [];
// ReactDOM.render(<MailBox unreadMessage="hello" />, document.getElementById("root"));


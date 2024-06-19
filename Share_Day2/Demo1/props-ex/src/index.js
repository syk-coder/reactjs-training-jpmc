// import React from 'react'
// import ReactDOM from 'react-dom'
// import Greeting from './App'

// function Index(){
//     const studentAge = 15;
//     return(
//         <div>
//             <Greeting name="Rakesh Srivastaw" age={28} />
//             <Greeting name="Archna" age={studentAge} />
//         </div>
//     );
// }
// ReactDOM.render(<Index/>,document.getElementById("root"));

// import React from 'react'
// import ReactDOM from 'react-dom'
// import Employee from './App'

// let friends = ["Ashok","Ankit","Amol"];
// let studentInfo = {mobileNo:87654321,emailId:"rakesh@gmail.com"}
// ReactDOM.render(<Employee name="Rakesh Srivastaw" 
// empId={101} 
// gender={true} 
// isChild={false} 
// friendList={friends} 
// studentDetails={studentInfo}
// fun1={()=>{return "Hi I am function!"}}
// fun2 = {(msg)=>{return msg}}
// funSum={(a,b)=>{return a+b}}
// />,document.getElementById("root"));

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//    <fragement><Employee name="Rakesh Srivastaw" 
//    empId={101} 
//    gender={true} 
//    isChild={false} 
//    friendList={friends} 
//    studentDetails={studentInfo}
//    fun1={()=>{return "Hi I am function!"}}
//    fun2 = {(msg)=>{return msg}}
//    funSum={(a,b)=>{return a+b}}
//    /></fragement>
// );


import React,{Component} from 'react'
import reactDom from 'react-dom'

class Parent extends Component{
   render(){
      return(
         <div>
            <h2>You are inside parent component</h2>
            <Child name="Rakesh Srivastaw" empId={101} />
         </div>
      )
   }
}

class Child extends Component{
   render(){
      return(
         <div>
            You are inside Child Component
            <h2>Hello,{this.props.name}</h2>
            <h3>Emp Id:{this.props.empId}</h3>
         </div>
      )
   }
}

reactDom.render(<Parent/>,document.getElementById('root'));
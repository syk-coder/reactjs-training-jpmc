// export default function Greeting(props){
//     const {name,age} = props;
//     return(
//         <p>Hello! I am {name} and my age is{age} </p>
//     );
// }


// export default function Employee(props)
// {
//     return(
//         <div>
//             <h1>Hello, {props.name} </h1>
//             <h2>Your EmpId is {props.empId}</h2>
//             <h3>Your gender:{props.gender===true?"Male":"Female"}</h3>
//             <h4>Is Child:{props.isChild===true?"Yes":"No"}</h4>
//             <h4>Friend List:
//                 <ul>
//                     {
//                         props.friendList.map(function namePrint(item,i){
//                             return <li key={i}>{item}</li>
//                         })
//                     }
//                 </ul>
//                 <h4>Mobile No:{props.studentDetails.mobileNo}</h4>
//                 <h4>Email Id:{props.studentDetails.emailId}</h4>
//                 <h2>Fun1:{props.fun1()}</h2>
//                 <h2>Fun2:{props.fun2("Hello RPS")}</h2>
//                 <h2>Fun SUM:{props.funSum(10,20)}</h2>
//             </h4>
//         </div>
//     );
// }

import React,{Component} from 'react'
export default class Employee extends Component{
    render(){
        return(
            <div>
                <h1>Hello,(this.props.name)</h1>
                <h2>Your EmpId is {this.props.empId}</h2>
            <h3>Your gender:{this.props.gender===true?"Male":"Female"}</h3>
            <h4>Is Child:{this.props.isChild===true?"Yes":"No"}</h4>
            <h4>Friend List:
                <ul>
                    {
                        this.props.friendList.map(function namePrint(item,i){
                            return <li key={i}>{item}</li>
                        })
                    }
                </ul>
                <h4>Mobile No:{this.props.studentDetails.mobileNo}</h4>
                <h4>Email Id:{this.props.studentDetails.emailId}</h4>
                <h2>Fun1:{this.props.fun1()}</h2>
                <h2>Fun2:{this.props.fun2("Hello RPS")}</h2>
                <h2>Fun SUM:{this.props.funSum(10,20)}</h2>
            </h4>
            </div>
        );
    }
}
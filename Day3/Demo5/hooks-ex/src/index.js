// import React, { useState } from 'react'
// import ReactDOM from 'react-dom'

// function Index() {
//     const nameStateVariable = useState("Ajeet Kumar");
//     console.log(nameStateVariable);
//     return (
//         <>
//             <h2>My Name is {nameStateVariable}</h2>
//         </>
//     );
// }
// ReactDOM.render(<Index />, document.getElementById("root"));


// import React, { useState } from 'react'
// import ReactDOM from 'react-dom'

// function Index() {
//     const  [name, setName] = useState("Ajeet Kumar");
//     const clickHandle = () => {
//         setName("Chandan Kumar");
//     }

//     return (
//         <>
//             <h2>My Name is {name}</h2>
//             <button type="button" onClick={clickHandle} >Change</button>
//         </>
//     );
// }
// ReactDOM.render(<Index />, document.getElementById("root"));




import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'

function Index() {
    const [count, setCount] = useState(0);

    const clickHandle = () => {
        setCount(count + 1);
    }

    useEffect(() => {
        console.log("useEffect called !!");
    });
    return (
        <>
            <h2>Count UP : {count}</h2>
            <button type="button" onClick={clickHandle} >Increment</button>
        </>
    );
}

ReactDOM.render(<Index />, document.getElementById("root"));
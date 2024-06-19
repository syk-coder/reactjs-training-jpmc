import React from 'react'
import ReactDOM from 'react-dom'

import Student from './App'
import Content from './Content'
import Header from './Header'
import Footer from './Footer'

function Index(){
    return(
        <div>
            <Header />
            <Content />
            <Student />
            <Footer />
        </div>
    );
}
ReactDOM.render(<Index/>,document.getElementById("root"));
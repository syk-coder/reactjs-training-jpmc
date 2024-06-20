import React,{Component} from 'react'
import { ReactDOM } from 'react';
class App1 extends Component {
    render() {
      return (
        <div>
            <h1>This is App1</h1>
          {this.props.children}
        </div>
      );
    }
  }
  export default App1;
import React,{Component} from 'react'
import { ReactDOM } from 'react';
import App1 from './App1'
import App2 from './App2'
class App extends Component {
    render() {
      return (
        <div>
          <App1>
            <App2 />
          </App1>
        </div>
      );
    }
  }
  
  export default App;
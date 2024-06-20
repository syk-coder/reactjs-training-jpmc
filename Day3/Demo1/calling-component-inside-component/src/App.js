import React from 'react';
import App1Component from './App1Component';
import App2Component from './App2Component';

const App = () => {
  return (
    <div>
      <h1>Example of React Components</h1>
      <App1Component>
        <App2Component />
      </App1Component>
    </div>
  );
};

export default App;

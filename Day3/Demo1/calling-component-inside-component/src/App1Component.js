import React from 'react';

const App1Component = ({children}) => {
  return (
    <div>
      {/* Content of app1 */}
      <h1>This is app1 component</h1>
      {children}
    </div>
  );
};

export default App1Component;
// import React, { Suspense } from 'react';

// const RemoteButton = React.lazy(() => import('remoteApp/Button'));

// const App = () => (
//   <div>
//     <h1>Host Application</h1>
//     <Suspense fallback={<div>Loading...</div>}>
//       <RemoteButton />
//     </Suspense>
//   </div>
// );

// export default App;

// In host-app/src/App.js or relevant file
import Button from 'remoteApp/Button';

function App() {
  return (
    <div>
      <h1>Host Application</h1>
      <Button />
    </div>
  );
}

export default App;

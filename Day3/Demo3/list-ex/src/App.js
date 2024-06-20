// import React from 'react';

// const App = () => {
//   // Sample data for the list
//   const fruits = ['Apple', 'Banana', 'Cherry', 'Date'];

//   return (
//     <div>
//       <h2>Example List:</h2>
//       <ul>
//         {fruits.map((fruit,index) => (
//           <li key={index} >{fruit}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;



import React, { useState } from 'react';

const App = () => {
  // State to manage a list of items
  const [items, setItems] = useState([
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
  ]);

  // Function to remove an item from the list
  const removeItem = (idToRemove) => {
    const updatedItems = items.filter(item => item.id !== idToRemove);
    setItems(updatedItems);
  };

  return (
    <div>
      <h2>Example List with Keys:</h2>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.name}
            <button onClick={() => removeItem(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
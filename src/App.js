import React, { useState } from 'react';
import './style.css'; // Assuming StackBlitz has a style.css file for basic styling

// Define the main App component using a function (Functional Component)
function App() {
  // 1. Declare a state variable named 'count' and a function 'setCount' to update it.
  // The starting value of count is 0.
  let taskdata = [];
  const [count, setCount] = useState(1);
  const [tasklist, setTasklist] = useState(taskdata);
  // 2. Define the function to run when the button is clicked
  const multiplyCount = () => {
    // Use the setCount function to update the state, which triggers a re-render
    setCount(count * 10);
  };
  const divideCount = () => {
    setCount(count * 0.10);
  };

  // 3. The component returns JSX (HTML-like syntax) to define the UI
  return (
    <div className="app-container">
      <h2>Shopping List ⚛️</h2>

      <button className="counter-button" onClick={multiplyCount}>
        Multiply
      </button>

      <button className="counter-button" onClick={divideCount}>
        Divide
      </button>

      <ul id="todo">
      </ul>

      {/* Display the current value of the state */}
      <div className="count-display">
        Total Tasks: <strong>{count}</strong>
      </div>
    </div>
  );
}

// Export the component so index.js can use it
export default App;

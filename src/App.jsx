import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div class="container">
      <h1>Counter</h1>
      <p>Current count: {count}</p>
      <button class="firstBtn" onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button class="thirdBtn" onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default App;
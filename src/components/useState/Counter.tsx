import React, { useState } from 'react';

function CounterWithPayload() {
  const [count, setCount] = useState(0);
  const [payload, setPayload] = useState('1'); // Default payload value is '1'

  const handleIncrement = () => {
    setCount(prevCount => prevCount + Number(payload)); // Convert payload to number before using
  };

  const handleDecrement = () => {
    setCount(prevCount => prevCount - Number(payload)); // Convert payload to number before using
  };

  const handleChange = (event: { target: { value: any; }; }) => {
    const value = event.target.value;
    setPayload(value);
  };

  return (
    <div>
      <h2>Counter: {count}</h2>
      <input type="number" value={payload} onChange={handleChange} />
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
}

export default CounterWithPayload;






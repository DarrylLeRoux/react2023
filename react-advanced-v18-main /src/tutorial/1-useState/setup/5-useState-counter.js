import React, { useState } from 'react';

const UseStateCounter = () => {
  const [count, setCount] = useState(0);

  const handleSubtract = () => {
    setCount((prev) => prev - 1);
  };
  const handleAddition = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div className='container'>
      <h4>Counter</h4>
      <p>{count}</p>
      <button className='btn' onClick={handleSubtract}>
        -
      </button>{' '}
      <button className='btn' onClick={handleAddition}>
        +
      </button>
    </div>
  );
};

export default UseStateCounter;

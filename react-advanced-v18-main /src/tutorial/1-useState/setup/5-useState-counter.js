import React, { useState } from 'react';

const UseStateCounter = () => {
  const [count, setCount] = useState(0);

  const handleSubtract = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  const handleReset = () => {
    setCount(0);
  };

  const handleAddition = () => {
    setCount(count + 1);
  };

  const complexIncrease = () => {
    setTimeout(() => {
      setCount((prevState) => {
        return prevState + 1;
      });
    }, 2000);
  };

  return (
    <>
      <section>
        <h4>Counter</h4>
        <h1>{count}</h1>
        <button className='btn' onClick={handleSubtract}>
          -
        </button>
        <button onClick={handleReset} className='btn'>
          Reset
        </button>
        <button className='btn' onClick={handleAddition}>
          +
        </button>
      </section>
      <br />
      <section>
        <h4>Complex Counter</h4>
        <h1>{count}</h1>
        <button className='btn' onClick={complexIncrease}>
          Increase Later
        </button>
      </section>
    </>
  );
};

export default UseStateCounter;

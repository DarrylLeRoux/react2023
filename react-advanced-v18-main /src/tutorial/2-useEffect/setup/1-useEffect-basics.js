import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    console.log('call useeffect');
    value === 0
      ? (document.title = `No new messages`)
      : (document.title = `New Messages(${value})`);
    // Second arg ([]) makes it run only once.
  }, [value]); // if you place the value, then it would run everytime the value changes
  console.log('rendered component');
  return (
    <>
      <h1>{value}</h1>
      <button
        className='btn'
        onClick={() => setValue(value + 1)}
      >
        Click me!
      </button>
    </>
  );
};

export default UseEffectBasics;

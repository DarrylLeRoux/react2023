import React, { useState } from 'react';

const UseStateBasics = () => {
  const [title, setTitle] = useState('Random Title');
  const handleClick = () => {
    setTitle('New Title');
  };
  return (
    <>
      <h2>{title}</h2>
      <button className='btn' type='button' onClick={handleClick}>
        Change Me
      </button>
    </>
  );
};

export default UseStateBasics;

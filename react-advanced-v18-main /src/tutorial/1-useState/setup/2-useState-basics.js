import React, { useState } from 'react';

const UseStateBasics = () => {
  const [title, setTitle] = useState('Random Title');
  const handleClick = () => {
    title === 'Random Title' ? setTitle('New Title') : setTitle('Random Title');
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

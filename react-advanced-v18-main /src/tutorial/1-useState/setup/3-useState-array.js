import React from 'react';
import { useState } from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [people, setPeople] = useState(data);
  return (
    <>
      {people.map((person) => {
        const { id, name } = person;
        const removeItem = (id) => {
          let newPeople = people.filter((person) => person.id !== id);
          setPeople(newPeople);
        };
        return (
          <div key={id} className='item'>
            <h4>{name}</h4>
            <button className='btn' onClick={() => removeItem(id)}>
              Remove
            </button>
          </div>
        );
      })}
      <button
        className='btn'
        onClick={() => {
          setPeople([]);
        }}
      >
        Clear Items
      </button>
    </>
  );
};

export default UseStateArray;

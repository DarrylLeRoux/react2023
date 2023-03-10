import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([]);

  // Fetch the users and set it to the new state of setUsers
  const getUsers = async () => {
    const response = await fetch(url);
    const users = await response.json();
    setUsers(users);
  };

  // useEffect will run once due to the dependancy array
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <h3>GitHub Users</h3>
      <ul className='users'>
        {/* // Map over the users that was returned from the async call  */}
        {users.map((user) => {
          const { id, login, avatar_url, html_url } = user;
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h4>{login}</h4>
                <a href={html_url}>Profile</a>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default UseEffectFetchData;

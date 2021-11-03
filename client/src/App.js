import React, { useEffect, useState, createContext, useContext } from 'react';
import { Link, Switch, Route } from 'react-router-dom';

import AllUsers from './components/AllUsers';
import SingleUserPage from './components/SingleUserPage';
import SearchBar from './components/SearchBar';
import './App.css';

export const Context = createContext({});

function App() {
  const [usersData, setUsersData] = useState(null);


  useEffect(() => { // Fetch array of users
    const getData = async () => {
      const res = await fetch('https://randomuser.me/api/?results=20');
      const { results } = await res.json();
      setUsersData(results)
    };
    !usersData && getData(); // Only get data if the users array is empty
  }, [usersData]);



  return (
    <Context.Provider value={usersData}>
      <div className='app'>
        <SearchBar />
        <Switch>
          <Route exact path='/'>
            <AllUsers />
          </Route>
          <Route exact path='/user/:id'>
            <SingleUserPage  />
          </Route>
        </Switch>
      </div>
    </Context.Provider>
  );
}

export default App;

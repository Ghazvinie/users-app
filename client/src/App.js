import React, { useEffect, useState, createContext } from 'react';
import { Link, Switch, Route } from 'react-router-dom';

import AllUsers from './components/AllUsers';
import SingleUserPage from './components/SingleUserPage';
import SearchBar from './components/SearchBar';
import './App.css';

export const Context = createContext({});

function App() {
  const [usersData, setUsersData] = useState([]);

  useEffect(() => { // Fetch array of users
    const getData = async () => {
      const res = await fetch('https://randomuser.me/api/?results=20');
      const { results } = await res.json();
      setUsersData(results)
    };
    getData();
  }, []);



  return (
    <Context.Provider value={usersData}>
      <div className='app'>
        <SearchBar usersData={usersData} />
        <Switch>
          <Route exact path='/'>
            <AllUsers usersData={usersData} />
          </Route>
          <Route exact path='/user/:id'>
            <SingleUserPage usersData={usersData} />
          </Route>
        </Switch>
      </div>
    </Context.Provider>
  );
}

export default App;

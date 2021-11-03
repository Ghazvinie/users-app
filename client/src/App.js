import React, { useEffect, useState } from 'react';
import { Link, Switch, Route } from 'react-router-dom';

import AllUsers from './components/AllUsers';
import SingleUser from './components/SingleUser';
import SearchBar from './components/SearchBar';
import './App.css';

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
    <div className='app'>
      <SearchBar usersData={usersData}/>
      <Switch>
        <Route exact path='/'>
          <AllUsers usersData={usersData}/>
        </Route>
        <Route exact path='/user/:id'>
          <SingleUser usersData={usersData}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;

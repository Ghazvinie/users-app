import React, { useEffect, useState } from 'react';
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
    <div>
      Hello
    </div>
  );
}

export default App;

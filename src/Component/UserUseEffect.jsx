import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UserUseEffect() {
  const [userData, setUserData] = useState([]);
  
  const getData = () => {
    axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10')
      .then((response) => {
        console.log(response.data);
        setUserData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {userData.map((obj) => {
        return (
          <div >
            <h2>User Id: {obj.id}</h2>
            <p>Title: {obj.title}</p>
          </div>
        );
      })}
    </div>
  );
}

export default UserUseEffect;

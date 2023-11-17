import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';


function App() {
   const [userData, setUserData] = useState({
       name: '',
       surname: ''
   })
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

const handleSetUserData = (e) => {
    setUserData(
        {
        ...userData,
        test: e.target.value
    }
    )
   }

  const buttonClick = () => {
      console.log(userData)
  }

  return (
    <React.Fragment>
        <input
            type="text"
            placeholder="First name"
            name="name"
            onChange={handleSetUserData}
        />
        <input
            type="text"
            placeholder="Second name"
            name="surname"
            onChange={handleSetUserData}
        />
          {error && <div>error name is to short</div>}

          <br/>
          <br/>
        <button onClick={buttonClick}>Submit</button>
    </React.Fragment>
  );
};

export default App;
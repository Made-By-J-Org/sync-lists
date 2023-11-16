import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { getValue } from '@testing-library/user-event/dist/utils';
import { useRef } from "react";
export default App;


function App() {

  // don't know what does "e" stands for and "\n"
  const handleSubmit = (e) => {
    e.preventDefault();
    const first = e.target.fname.value;
    const last = e.target.lname.value;
    console.log("First name :" + first, "\n", "Last name: " + last);
  };

  // dont know why isn't working line:41
  // const App = () => {
  //   const inputRef = useRef(null);

  //   function handleClick() {
  //     console.log(inputRef.current.value);
  //   };
  // };


  return (
    <React.Fragment>
      <button>TestButton</button>

      {/* Used button version */}
      <form onSubmit={handleSubmit}>
        <input type="text" name="fname" placeholder="First name" /><br></br>
        <input type="text" name="lname" placeholder="Last name" /><br></br>
        <button>Submit</button>
      </form>


      {/* Don't know why this isn't working */}
      {/* 
      <div>
      <input
        ref={inputRef}
        type="text"
        id="message"
        name="message"
      />

      <button onClick={handleClick}>Log message</button>
    </div> */}

      <div className="App">
        <div class="testp">
          <p>test</p>
        </div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </React.Fragment>
  );
};
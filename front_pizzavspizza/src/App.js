import logo from './logo.svg';
import './App.css';
import React from 'react';
import PizzaList from './pizzerias/pizzeriaslist';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="https://bit.ly/book-pizza" className="App-logo" alt="logo" />
        <p>Welcome to Pizza Application Module</p>
        <h1>Pizza App</h1>
        <PizzaList/>
      </header>
    </div>
  );
}

export default App;

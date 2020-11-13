import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/HeaderComponent';
import HomePage from './pages/Home';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    </div>
  );
}

export default App;

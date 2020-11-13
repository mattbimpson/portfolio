import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Container } from './App-Styles';
import Header from './components/HeaderComponent';
import HomePage from './pages/home/Home';

function App() {
  return (
    <>
      <Header></Header>
      <Container>
        
        <BrowserRouter>
          <HomePage />
        </BrowserRouter>
      </Container>
    </>
  );
}

export default App;

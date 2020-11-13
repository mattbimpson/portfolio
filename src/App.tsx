import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Container } from './App-Styles';
import Header from './components/HeaderComponent';
import HomePage from './pages/home/Home';
import WorkPage from './pages/work/Work';
import ContactPage from './pages/contact/Contact';

function App() {
  return (
    <>
      <Header></Header>
      <Container>
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/work" component={WorkPage} />
          <Route path="/contact" component={ContactPage} />
        </Switch>
      </Container>
    </>
  );
}

export default App;

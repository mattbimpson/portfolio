import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Container } from './App-Styles';
import Header from './components/header/HeaderComponent';
import HomePage from './pages/home/Home';
import ContactPage from './pages/contact/Contact';

const App: React.FC<any> = (props: any) => {

  const { location } = props;

  return (
    <>
      <Header></Header>
      <Container>
        <TransitionGroup>
          <CSSTransition
            key={location.key}
            timeout={{ enter: 1000, exit: 200 }}
            classNames={'fade'}>
            <Container>
              <Switch location={location}>
                <Route path="/" component={HomePage} exact />
                <Route path="/contact" component={ContactPage} />
              </Switch>
            </Container>
          </CSSTransition>
        </TransitionGroup>
      </Container>
    </>
  );
}

export default withRouter(App);

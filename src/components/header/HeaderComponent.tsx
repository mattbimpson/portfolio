import React from 'react';
import { Container, Nav, RouterLink } from './Styles';

const Header: React.FC<any> = () => {

  function scrollToTop() {
    window.scrollTo(0, 0);
  }

  return (
    <>
      <Container>
        <Nav>
          <RouterLink to="/" onClick={scrollToTop}>
            home
          </RouterLink>
          <RouterLink to="/contact" onClick={scrollToTop}>
            contact
          </RouterLink>
        </Nav>
      </Container>
    </>
  )
}

export default Header;

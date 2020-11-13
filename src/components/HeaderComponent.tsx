import React from 'react';
import { Container, Nav, RouterLink } from './Styles';

const Header: React.FC<any> = () => {
  return (
    <>
      <Container>
        <Nav>
          <RouterLink to="/">
            home
          </RouterLink>
          {/* <RouterLink to="/work">
            Work
          </RouterLink> */}
          <RouterLink to="/contact">
            contact
          </RouterLink>
        </Nav>
      </Container>
    </>
  )
}

export default Header;

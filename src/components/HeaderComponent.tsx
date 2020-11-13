import React from 'react';
import { Container, Nav } from './Styles';
import { Link } from 'react-router-dom';

const Header: React.FC<any> = () => {
  return (
    <>
      <Container>
        <Nav>
          <Link to="/">
            Home
          </Link>
          <Link to="/work">
            Work
          </Link>
          <Link to="/contact">
            Contact
          </Link>
        </Nav>
      </Container>
    </>
  )
}

export default Header;
